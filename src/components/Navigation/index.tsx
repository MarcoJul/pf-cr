'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./navigation.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  const router = useRouter();

  function getActivePosition() {
    if(pathName === '/') return styles.home;
    if(pathName === '/projects') return styles.project;
    if(pathName === '/method') return styles.method;
    if(pathName === '/about') return styles.about;
  }

  function setNavigationStyle(){
    if(pathName === '/projects/kiko') {
      return styles.translateUp;
    } else {
      return '';
    }
  }

  return (
    <nav className={styles.navigation}>
      <div className={`${styles.content} ${setNavigationStyle()}`}>
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
        <a onClick={()=> router.back()}>back</a>
        <Link href="/projects">projects</Link>
        <p>/</p>
        <p>KIKO Milano</p>
      </div>
        
        </div>
    </nav>
  );
}
