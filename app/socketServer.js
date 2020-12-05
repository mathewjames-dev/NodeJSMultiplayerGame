/***
 *
 * Socket Server File
 * This will be utilized to house the main socket function/s.
 *
 ***/

class SocketServer {
    constructor(io) {
        this.io = io;
        this.sockets = [];
    }

    listen() {
        this.io.sockets.on('connection', (socket) => {
            console.log('*** SERVER: NEW CONNECTION! ***');

            var socketId = socket.id;

            /*
             * GAME EVENT LISTENERS
             */
            // Upon disconnection from the socket server, remove the player from the game list and socket list.
            socket.on('disconnect', () => {
                console.log('*** SERVER: DISCONNECTED USER! ***');
                gameServer.game.removePlayer(socketId);
                gameServer.socketServer.removeSocket(socketId);
            });

            /*
             * PLAYER EVENT LISTENERS.
             */
            socket.on('playerMovement', (data) => {
                let player = gameServer.game.getPlayer(socketId);
                if (player) {
                    player.movePlayer(data)
                }
            });

            socket.on('increaseHealth', (data) => {
                let player = gameServer.game.getPlayer(data.id);
                if (player) player.health += data.health;
            });

            /*
             * CHAT EVENT LISTENERS.
             */
            socket.on('sendMsgToServer', (data) => {
                console.log('SERVER: Someone sent a message!');

                gameServer.socketServer.io.emit('broadcastMessage', data);
            });
        });
    }

    // Add a socket to the list.
    addSocket(id) {
        this.sockets.push(id);
    }

    // Remove a socket from the list.
    removeSocket(id) {
        delete this.sockets[id];
    }

    // Function to get all sockets.
    getSocketList() {
        return this.sockets;
    }
}

module.exports = SocketServer;