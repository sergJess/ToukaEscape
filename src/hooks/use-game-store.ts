import { create } from 'zustand'

interface GameState {
    score: number;
    view: 'splash' | 'menu' | 'game';
    level: number;
    setScore: (points: number) => void;
    setView: (view: 'splash' | 'menu' | 'game') => void;
    incrementScore: (amount: number) => void;
}

export const useGameStore = create<GameState>((set) => ({
    score: 0,
    view: 'splash',
    level: 1,
    setScore: (points) => set({ score: points }),
    setView: (view) => set({ view }),
    incrementScore: (amount) => set((state) => ({ score: state.score + amount })),
}))