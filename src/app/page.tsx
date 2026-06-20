import Image from "next/image";
import ToukaImage from "@public/toukaYoko99.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Touka Escape</h1>
          <p className={styles.sloganText}>
            Stay alive while the whole world crumbling!!
          </p>
          <div className={styles.posterContainer}>
            <Image
              className={styles.posterImage}
              alt="Touka Poster"
              src={ToukaImage}
              priority
            />
          </div>
        </div>
        <div className={styles.ctas}>2026</div>
      </main>
    </div>
  );
}
