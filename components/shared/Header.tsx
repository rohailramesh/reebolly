import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper relative flex flex-col sm:flex-row items-center justify-between p-4 gap-4 sm:gap-2">
        {/* Mobile layout with logo in center, links around */}
        <div className="w-full sm:hidden grid grid-cols-4 items-center">
          <div className="flex flex-col items-end">
            <Button
              asChild
              className={`rounded-full ${styles.btn} w-full`}
              size="sm"
            >
              <Link className={"font-cursive"} href="/">
                Home
              </Link>
            </Button>
            <Button
              asChild
              className={`rounded-full ${styles.btn} w-full mt-2`}
              size="sm"
            >
              <Link href="/#contact-form">
                <h3>Contact</h3>
              </Link>
            </Button>
          </div>

          <Link href="/" className="col-span-2 flex justify-center">
            <Image
              src="/assets/images/logo3.png"
              width={128}
              height={38}
              alt="logo"
              className={styles.logo}
            />
          </Link>
          <div className="flex flex-col items-start">
            <Button
              asChild
              className={`rounded-full ${styles.btn} w-full`}
              size="sm"
            >
              <Link href="/work">My Work</Link>
            </Button>
            <Button
              asChild
              className={`rounded-full ${styles.btn} w-full mt-2`}
              size="sm"
            >
              <Link href="/#all-events">Workshops</Link>
            </Button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex w-full items-center justify-between">
          <div className="flex items-center gap-10">
            <Button asChild className={`rounded-full ${styles.btn}`} size="lg">
              <Link href="/work">My Work</Link>
            </Button>
            <Button asChild className={`rounded-full ${styles.btn}`} size="lg">
              <Link href="/">Home</Link>
            </Button>
          </div>

          <Link href="/" className="mx-4">
            <Image
              src="/assets/images/logo3.png"
              width={128}
              height={38}
              alt="logo"
              className={styles.logo}
            />
          </Link>

          <div className="flex items-center gap-10">
            <Button asChild className={`rounded-full ${styles.btn}`} size="lg">
              <Link href="/#all-events">Workshops</Link>
            </Button>
            <Button asChild className={`rounded-full ${styles.btn}`} size="lg">
              <Link href="/#contact-form">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import styles from "./Header.module.css";
// const Header = () => {
//   return (
//     <header className="w-full border-b">
//       <div className="wrapper flex items-center justify-between">
//         <Link href="/" className="w-40">
//           <Image
//             src="/assets/images/logo.png"
//             width={128}
//             height={38}
//             alt="logo"
//             className={styles.logo}
//           />
//         </Link>
//         <Button asChild className={`rounded-full ${styles.btn}`} size="sm">
//           <Link href="/work">My Work</Link>
//         </Button>
//         {/* Link to contact-form and projects page */}
//         <Button asChild className={`rounded-full ${styles.btn}`} size="sm">
//           <Link href="/#all-events">Attend Workshops</Link>
//         </Button>
//         <Button asChild className={`rounded-full ${styles.btn}`} size="sm">
//           <Link href="/#contact-form">Contact Me</Link>
//         </Button>
//       </div>
//     </header>
//   );
// };

// export default Header;
