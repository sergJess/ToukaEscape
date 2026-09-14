"use client";
import { useEffect, useRef } from "react";
import { useGameStore } from "@/store/useGameSore";
import { Button } from "@/components/Button/Button";
import styles from "./game.module.css";
import type Phaser from "phaser";
export default function Game() {
  const gameRef = useRef<Phaser.Game | null>(null);
  const status = useGameStore((state) => state.status);
  const changeGameStatus = useGameStore((state) => state.changeGameStatus);
  return (
    <div className={styles.page}>
      <div className={styles.button__container}>
        <Button
          onClick={() => {
            console.log("JEss");
          }}
          className={styles.button__start}
          text="Start"
        ></Button>
      </div>
    </div>
  );
}
