import 'phaser';
import { Scene } from 'phaser';
import toukaMotoPoster from '../../../assets/character/toukaYoko99.jpg';
export class StartScene extends Scene {
    constructor() {
        super('Start-scene');
    }
    public preload(): void {
        this.load.atlas("spritesheet", toukaMotoPoster);
    }

    public create(): void {
        this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY - 100,
            "Touka Escape",
            { font: `52px Arial`, color: '#a71d97ff' })
            .setOrigin(0.5);
    }
}