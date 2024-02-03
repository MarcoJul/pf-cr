import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      Projects Page
      <nav className={styles.navigation}>
            <ul className={styles.menu}>
            <li className={styles.active}>
                    <Link className={styles.navLink} href="/">Homepage</Link>
                </li>
                <li className={styles.active}>
                    <Link className={styles.navLink} href="/projects/kiko">Kiko</Link>
                </li>
                <li>
                    <Link className={styles.navLink}  href="/project/g7a">G7A</Link>
                </li>
            </ul>
        </nav>
    </main>
  );
}
