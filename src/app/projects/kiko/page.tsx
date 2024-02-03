import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      Kiko
      <nav className={styles.navigation}>
            <ul className={styles.menu}>
                <li className={styles.active}>
                    <Link className={styles.navLink} href="/projects">Back to projects</Link>
                </li>
            </ul>
        </nav>
    </main>
  );
}
