import React, { useRef } from 'react';
import * as styles from './style/style.module.scss';
export const Game = () => {
    const refToStartButton = useRef<HTMLButtonElement | null>(null);
    const clickOnButton = () => {
        const button = refToStartButton.current;
        if (button) {
            button.classList.add(`${styles.startButtonClicked}`);
        }
        console.log(12);
    };
    return <div className={styles.gamePage}><button ref={refToStartButton} onClick={clickOnButton} className={styles.startButton}>Start the GAME[X]</button></div>
}