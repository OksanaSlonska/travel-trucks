"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? `${styles.navLink} ${styles.active}`
      : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/image/logo.svg"
              alt="TravelTrucks"
              width={136}
              height={16}
              loading="eager"
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/catalog" className={getLinkClass("/catalog")}>
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
