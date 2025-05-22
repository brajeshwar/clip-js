'use client';
import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname.startsWith("/projects/")) {
    return null;
  }

  return (
    <footer className="bg-black border-t border-gray-800 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-t dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        <p className="ml-4">
          &copy; {currentYear} ClipJS. All rights reserved.
          &nbsp;<a href="https://github.com/mohyware/clip-js">Original Source from Mohy Khalid.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
