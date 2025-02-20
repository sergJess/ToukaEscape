import React from 'react';
import { NavLink } from "react-router";
import * as styles from './style.module.scss';
export const Nav = () => {
    return <nav className={styles.nav}>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/settings'>Settings</NavLink>
    </nav>
}