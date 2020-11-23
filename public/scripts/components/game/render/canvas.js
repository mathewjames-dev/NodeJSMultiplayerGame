/***
 *
 * Front-end Canvas Component
 *
 ***/
// Setup the relevant requirements for the file.
const SpriteRender = require('./entities/spriteRender');

class Canvas {
    drawPlayerStates(players) {
        playerContext.clearRect(0, 0, mapCanvas.width, mapCanvas.height);

        // Loop the player object that we're passed.
        for (let id in players) {
            let player = players[id];
            let spriteRender = new SpriteRender(player);

            spriteRender.drawSprite(player);


            // SOUND RELATED
            let playerX = Math.round(player.x / 16),
                playerY = Math.round(player.y / 16),
                tile = player.globalMapData.layers[0].data[playerY * player.globalMapData.width + playerX];
            if (player.movement.up || player.movement.down || player.movement.right || player.movement.left) {
                if (game.assetLoader.sounds[tile]) {
                    game.assetLoader.sounds[tile].play();
                    game.lastPlayedTileSound = tile;

                }
            } else {
                if (game.assetLoader.sounds[game.lastPlayedTileSound]) {
                    game.assetLoader.sounds[game.lastPlayedTileSound].pause();
                }
            }
        }
    }
}

module.exports = Canvas;