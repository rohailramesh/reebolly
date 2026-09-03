import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="wrapper">
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/assets/images/logo.png"
              alt="ReeBolly Logo"
              width={150}
              height={45}
              className={styles.logo}
            />
          </Link>
          <p className={styles.tagline}>Dance. Movement. Expression.</p>
          <p className={styles.description}>
            A London-based dance and creative platform celebrating Bollywood, 
            fusion and the joy of movement.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className={styles.navSection}>
          <h4 className={styles.navTitle}>EXPLORE</h4>
          <ul className={styles.navList}>
            <li><Link href="/#all-events" className={styles.navLink}>Experiences</Link></li>
            <li><Link href="/#all-events" className={styles.navLink}>Classes</Link></li>
            <li><Link href="/#contact-form" className={styles.navLink}>Choreography</Link></li>
            <li><Link href="/#contact-form" className={styles.navLink}>Performances</Link></li>
            <li><Link href="/work" className={styles.navLink}>My Work</Link></li>
          </ul>
        </div>

        <div className={styles.navSection}>
          <h4 className={styles.navTitle}>COMPANY</h4>
          <ul className={styles.navList}>
            <li><Link href="/work" className={styles.navLink}>About</Link></li>
            <li><Link href="/#contact-form" className={styles.navLink}>Work With Us</Link></li>
            <li><Link href="/#contact-form" className={styles.navLink}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.navSection}>
          <h4 className={styles.navTitle}>CONNECT</h4>
          <ul className={styles.navList}>
            <li>
              <Link 
                href="https://www.instagram.com/reebolly/" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.tiktok.com/@reeha.r?_t=8pkYYCwyQOe&_r=1" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                TikTok
              </Link>
            </li>
            <li>
              <Link 
                href="mailto:reebollyr@gmail.com" 
                className={styles.navLink}
              >
                Email
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletterSection}>
          <h4 className={styles.navTitle}>JOIN THE REEBOLLY LIST</h4>
          <p className={styles.newsletterText}>
            Be first to hear about new workshops, events and dance experiences.
          </p>
          <form 
            action="https://formsubmit.co/reebollyr@gmail.com" 
            method="POST"
            className={styles.newsletterForm}
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className={styles.emailInput}
            />
            <button type="submit" className={styles.submitButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} REEHA R. All Rights Reserved.
        </p>
        <div className={styles.socialIcons}>
          <Link 
            href="https://www.instagram.com/reebolly/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src="/assets/icons/insta.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link 
            href="https://www.tiktok.com/@reeha.r?_t=8pkYYCwyQOe&_r=1" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src="/assets/icons/tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
