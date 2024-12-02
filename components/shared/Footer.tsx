import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="border-t py-4 bg-gray-50">
    <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
      {/* Social Media Links */}
      <div className="flex space-x-4">
        <Link href="https://www.instagram.com/reebolly/" target="_blank">
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
        >
          <Image
            src="/assets/icons/tiktok.svg"
            alt="TikTok"
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* Footer Text */}
      <div className="text-center sm:text-right mt-4 sm:mt-0">
        <p className="text-primary-500 text-sm">
          © REEHA R. 2024. All Rights Reserved.
        </p>
      </div>
      {/* Logo Section */}
      <div className="mb-4 sm:mb-0">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
