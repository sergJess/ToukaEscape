import { Button } from "../../components/Button/Button";
import styles from "./game.module.css";
export default function Game() {
  return (
    <div className={styles.page}>
      <div className={styles.button__container}>
        <Button className={styles.button__start} text="Start"></Button>
      </div>
    </div>
  );
}
