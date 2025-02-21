import React from 'react';
import { NavLink } from "react-router";
import * as styles from './style.module.scss';
export const Nav = () => {
    return <nav className={styles.nav}>
        <NavLink className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`} to='/' end>Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`} to='/game' end>Game</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`} to='/settings'>Settings</NavLink>
    </nav>
}