import Story from "./sections/story";
import styles from "./page.module.css";
import Link from "next/link";
import Data from "@/projects/kiko/sections/data";
import Scrolling from "./sections/scrolling";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="hero" className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.title}>KIKO Milano</h1>
          <p className={styles.kicker}>Composable Commerce:<br/> a continuous evolution</p>
          <Link className={styles.storeLink} href="https://www.kikocosmetics.com/">kikocosmetics.com</Link>
        </div>
      </section>
      <Story />
      <Data />
      <Scrolling/>
    </main>
  );
}
