import Image from "next/image";
import Story from "./components/story";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="hero" className={styles.hero}>
        <div className={styles.heroTextBox}>
          <h1 className={styles.title}>KIKO Milano</h1>
          <p className={styles.kicker}>Composable Commerce:<br/> a continuous evolution</p>
        </div>
      </section>
      <div className={styles.entryImage}>
          <div className={styles.boxImage}>
            <Image className={styles.coverImage} alt="kiko intro image" width={525} height={525} src="/kiko/intro-kiko.jpg" priority/>
          </div>
          <Image className={styles.oval} src="/shared/oval.svg" alt="" width={525} height={525}/>
      </div>
      <Story />
    </main>
  );
}
