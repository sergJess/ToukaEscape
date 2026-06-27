"use client";
import { create } from "zustand";
type GameState = "menu" | "playing" | "gameover";
type GameStore = {
  status: GameState;
  score: number;
  startGame: () => void;
  addPoints: (points: number) => void;
  resetGame: () => void;
};
export const useGameStore = create<GameStore>((set) => ({
  status: "menu",
  score: 0,
  startGame: () => set({ status: "playing" }),
  addPoints: (points) => set((state) => ({ score: state.score + points })),
  resetGame: () => set({ status: "menu", score: 0 }),
}));
