import 'phaser';
import { Scene } from 'phaser';
import toukaMotoPoster from '../../assets/character/ToukaYoko00.jpeg';
import { StartScene } from ''
export const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 856,
    height: 824,
    zoom: 2,

    input: {
        keyboard: true,
        gamepad: true,
    },
    render: {
        pixelArt: true,
        antialias: false,
        antialiasGL: false,
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: {
                x: 100,
                y: 500,
            },
        },
    },
    scene: []

}
class Game {
    game: Phaser.Game;
    constructor(config: Phaser.Types.Core.GameConfig) {
        this.game = new Phaser.Game({ ...config, scene: { preload: this.preload } });
    }
    preload() {
    }

}
// export class Preloader extends Scene {
//     game: Phaser.Game;
//     constructor(config: Phaser.Types.Core.GameConfig) {
//         super('Preloader');
//         this.game = new Phaser.Game({ ...config, scene: { preload: this.preload } });

//     }
//     preload() {
//         this.load.image('poster', `${toukaMotoPoster}`);
//     }
// }
export const game = new Game(config);


