import React, { useRef } from 'react';
// import { game } from '../../game/config/config'
import * as styles from './style/style.module.scss';

export const Game = () => {
    const refToStartButton = useRef<HTMLButtonElement | null>(null);
    const clickOnButton = () => {
        const button = refToStartButton.current;
        if (button) {
            button.classList.add(`${styles.startButtonClicked}`);
            setTimeout(() => {
                // game.preload();
            }, 400);
        }
    };
    return <div id="game-root" className={styles.gamePage}><button ref={refToStartButton} onClick={clickOnButton} className={styles.startButton}>Start the GAME[-_X_-]</button></div>
}