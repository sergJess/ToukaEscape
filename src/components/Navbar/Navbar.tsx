import Link from 'next/link';
import styles from "./navbar.module.css";
export function Navbar() {
    const clickOnLink = () => {

    }
    return (

        <nav className={styles.navbar}>
            <Link href="/" className={styles.navbar__link}>Home</Link>
            <Link href="/game" className={styles.navbar__link}>Game</Link>
        </nav>
    );
}