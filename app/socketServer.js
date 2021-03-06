/***
 *
 * Socket Server File
 * This will be utilized to house the main socket function/s.
 *
 ***/
const ItemModel = require("./database/models/item");

class SocketServer {
    constructor(io) {
        this.io = io;
        this.sockets = [];
    }

    listen() {
        this.io.sockets.on('connection', (socket) => {
            console.log('*** SERVER: NEW CONNECTION! ***');

            this.sockets[socket.id] = socket;
            var socketId = socket.id;

            /*
             * GAME EVENT LISTENERS
             */
            // Upon disconnection from the socket server, remove the player from the game list and socket list.
            socket.on('disconnect', async () => {
                console.log('*** SERVER: DISCONNECTED USER! ***');

                // Start by removing the player from both the game and socket server.
                let player = gameServer.game.players[socketId];
                if (!player) {
                    gameServer.socketServer.removeSocket(socketId);
                } else {
                    gameServer.game.removePlayer(socketId)
                        .then(gameServer.socketServer.removeSocket(socketId))
                        .then(player.updatePlayerState());
                }
            });

            /*
             * PLAYER EVENT LISTENERS.
             */
            socket.on('playerMovement', (data) => {
                let player = gameServer.game.players[socketId];
                if (player) player.updateMovement(data)
            });

            socket.on('inventoryItemUsed', async (data) => {
                var player = gameServer.game.players[socket.id];
                let item = await ItemModel.findById(data.itemId).exec();
                if (item.properties.type === 'Health Potion' && player.health < player.maxHealth) {
                    player.health += item.properties.value;
                    await player.inventory.removeItemFromInventory(player.dbId, data.itemId);
                }
            });

            socket.on('inventoryRedrawn', async (data) => {
                let player = gameServer.game.players[socket.id];
                player.inventory.redraw = 0;
            })

            /*
             * CHAT EVENT LISTENERS.
             */
            socket.on('sendMsgToServer', (data) => {
                console.log('SERVER: Someone sent a message!');

                gameServer.socketServer.io.emit('broadcastMessage', data);
            });
        });
    }

    // Remove a socket from the list.
    async removeSocket(id) {
        delete this.sockets[id];
    }
}

module.exports = SocketServer;