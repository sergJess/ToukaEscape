import 'phaser';
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
    // scene: [],
}