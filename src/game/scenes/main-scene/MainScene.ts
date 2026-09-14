import Phaser from "phaser";
import { useGameStore } from "@/store/useGameSore";
import { fontStyles } from "./styles";
export class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }
  preload() {}
  create() {
    this.add.text(100, 100, "Touka Escape Started!", fontStyles);
    this.input.on("pointerdown", () => {
      useGameStore.getState().addPoints(10);
    });
  }
  update() {}
}
