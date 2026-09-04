"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experiences", label: "Experiences" },
    { href: "/classes", label: "Classes" },
    { href: "/choreography", label: "Choreography" },
    { href: "/work", label: "About" },
  ];

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/assets/images/logo3.png"
              width={140}
              height={42}
              alt="ReeBolly - Dance, Movement, Expression"
              className={styles.logo}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={styles.desktopCta}>
            <Link href="/#contact-form" className={styles.ctaButton}>
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact-form"
            className={styles.mobileCtaButton}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
