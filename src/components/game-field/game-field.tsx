import React from 'react';
import * as styles from './game-field.module.scss';

export const GameField = () => {
    return <canvas width={styles.canvas} height={styles.height}></canvas>
}