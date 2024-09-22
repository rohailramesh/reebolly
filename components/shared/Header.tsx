import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-40">
          <Image
            src="/assets/images/logo.png"
            width={128}
            height={38}
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <Button asChild className={`rounded-full ${styles.btn}`} size="lg">
          <Link href="/#all-events">Attend Workshops</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
