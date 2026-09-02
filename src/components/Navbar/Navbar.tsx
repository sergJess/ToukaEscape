import Link from "next/link";
import styles from "./navbar.module.css";
export function Navbar() {
  const clickOnLink = () => {};
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <Link href="/" className={styles.navbar__link}>
            Home
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link href="/game" className={styles.navbar__link}>
            Game
          </Link>
        </li>
      </ul>
    </nav>
  );
}
