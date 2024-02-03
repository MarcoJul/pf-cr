import Image from "next/image";
import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.active}>
        
      </div>
      <ul className={styles.menuList}>
        <li>
          <Link href="/">
            <Image
              src="/MenuIcon.svg"
              className={styles.menuIcon}
              alt="Go to homepage"
              width={48}
              height={48}
            />
          </Link>
        </li>
        <li className={styles.active}>
          <Link className={styles.navLink} href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/method">
            Method
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
