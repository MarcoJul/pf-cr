import Story from "./components/story";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="hero" className={styles.hero}>
        <h1 className={styles.title}>KIKO Milano</h1>
      </section>
      <Story />
    </main>
  );
}
