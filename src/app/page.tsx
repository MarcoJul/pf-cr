import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      Homepage
      <nav className={styles.navigation}>
            <ul className={styles.menu}>
                    <Image src="/MenuIcon.svg" className={styles.menuIcon} alt="HomePage Icon" width={48} height={48} />
                <li className={styles.active}>
                    <Link className={styles.navLink} href="/projects">Projects</Link>
                </li>
                <li>
                    <Link className={styles.navLink}  href="/method">Method</Link>
                </li>
                <li>
                    <Link  className={styles.navLink} href="/about">About</Link>
                </li>
            </ul>
        </nav>
    </main>
  );
}
