import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section id="hero" className={styles.hero}>
        <h1 className={styles.title}>KIKO Milano</h1>
      </section>
      <section id="story" className={styles.storySection}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, exercitationem assumenda a illum optio non consequuntur neque sapiente animi omnis? Quod magni illum, excepturi neque dolore amet iure molestias obcaecati.
      </section> 
    </main>
  );
}
