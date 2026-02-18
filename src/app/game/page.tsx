'use client'
import { useGameStore } from '@/hooks/use-game-store'
import dynamic from 'next/dynamic'

const PhaserGame = dynamic(() => import('@/components/PhaserGame'), { ssr: false })

export default function GamePage() {
    const { view, setView, score } = useGameStore()

    return (
        <main>
            <div className="fixed top-4 right-4 z-50 text-white font-bold">
                Score: {score}
            </div>

            {view === 'splash' && (
                <button onClick={() => setView('menu')}>START</button>
            )}

            {view === 'menu' && (
                <button onClick={() => setView('game')}>PLAY LEVEL 1</button>
            )}

            {view === 'game' && <PhaserGame />}
        </main>
    )
}
