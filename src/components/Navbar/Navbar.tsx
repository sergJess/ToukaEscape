"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Game", href: "/game" },
];
export function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.list}>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className={styles.listItem}>
              <Link
                href={link.href}
                className={`${styles.navbarLink} ${isActive ? styles.navbarLinkActive : ""}`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
