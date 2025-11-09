"use client"

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();


  return(
    <header className={styles.header}>
      <h1>AthletiQ</h1>
      <nav>
        <ul>
           <li><Link href="/" className={pathname === "/" ? `${styles.link} ${styles.linkActive}` : `${styles.link}`}>Home</Link></li>
          <li><Link href="/shop" className={pathname === "/shop" ? `${styles.link} ${styles.linkActive}` : `${styles.link}`}>Shop</Link></li>
          <li><Link href="/about" className={pathname === "/about" ? `${styles.link} ${styles.linkActive}` : `${styles.link}`}>About</Link></li>
        </ul>
      </nav>
    </header>
  );
}