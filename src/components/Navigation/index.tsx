'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();

  function getActivePosition() {
    if(pathName === '/') return styles.home;
    if(pathName === '/projects') return styles.project;
    if(pathName === '/method') return styles.method;
    if(pathName === '/about') return styles.about;
  }

  console.log(pathName);
  return (
    <nav className={styles.navigation}>
      <div className={`${styles.active} ${getActivePosition()}`}>
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
              priority
            />
          </Link>
        </li>
        <li>
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
      <div className={styles.pageNavigation}>
        <p>projects</p>
        <p>/</p>
        <p>KIKO Milano</p>
      </div>
    </nav>
  );
}
