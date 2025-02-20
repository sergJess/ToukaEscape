import React from "react";
import * as styles from './style.module.scss';
import { Nav } from '../../components/navigation/nav';
export const Header = () => {
    return <header className={styles.header}><Nav></Nav></header>
}