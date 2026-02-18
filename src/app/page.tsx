import Image from "next/image";
import ToukaImage from "@public/toukaYoko99.jpg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Touka Escape</h1>
          <div>
            <Image
              alt="Touka Poster"
              src={ToukaImage}
            />
          </div>
        </div>
        <div className={styles.ctas}>
          2026
        </div>
      </main>
    </div>
  );
}
