import React from 'react';
import * as styles from './style/style.module.scss';
import characterImg from '../../assets/character/toukaYoko99.jpg';
export const HomePage = () => {
    const title = 'Touka YokoHame [Yoko] E[sc]apeX';
    return <div className={styles.page}><h2 className={styles.title}>{title}</h2>
        <div><img alt='image of hope' src={characterImg}></img></div>
    </div>
}