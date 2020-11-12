/***
 *
 * Back-end Game Component File
 *
 ***/

// Import the components required.
const player = require('../game/entities/player/player');

class Game {
    constructor() {
        this.sockets = {};
        this.players = {};
    }

    addPlayer(socket) {
        // Pushing the users socket id into the socket list.
        this.sockets[socket.id] = socket;

        // Create a player with the socket id and the map they will be spawning in
        let Player = player.Player({
            id: socket.id
        });

        this.players[socket.id] = Player;
    }

    // Function to remove the player from the game.
    removePlayer(socket) {
        delete this.sockets[socket.id];
        delete this.players[socket.id];
    }

    // Function to get a player by socket id.
    getPlayer(socketId) {
        return this.players[socketId];
    }

    // Function to get all players.
    getPlayers() {
        return this.players;
    }

    // Function to get all sockets.
    getSocketList() {
        return this.sockets;
    }
}

module.exports = Game;