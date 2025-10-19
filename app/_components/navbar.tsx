"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSignature from "./AnimatedSignature";
import DarkModeToggle from "./DarkModeToggle";

interface LinkElement {
  name: string;
  link: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: LinkElement[] = [
    { name: "about", link: "about" },
    { name: "experience", link: "experience" },
    { name: "projects", link: "projects" },
    { name: "more", link: "more" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar z-50 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-64 py-2 md:py-2.5 sticky top-0 ${
        scrolled
          ? "shadow-md backdrop-blur-sm bg-white/90 dark:bg-gray-900/90"
          : "shadow-sm bg-white dark:bg-gray-900"
      } transition-all duration-300`}
    >
      <div className="flex-grow">
        <Link href={"/"} className="inline-block">
          <AnimatedSignature />
        </Link>
      </div>
      <div className="hidden md:flex font-medium gap-1 lg:gap-2 items-center">
        {links.map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <motion.button
              className="px-3 lg:px-4 py-2 text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.name}
            </motion.button>
          </Link>
        ))}
        <DarkModeToggle />
      </div>
      <div className="md:hidden relative flex items-center gap-2">
        <DarkModeToggle />
        <motion.button
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <i
            className={`bi ${
              isMenuOpen ? "bi-x text-2xl" : "bi-list text-2xl"
            }`}
          ></i>
        </motion.button>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={`/${link.link}`}
                onClick={closeMenu}
                className="block py-3 px-4 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary dark:text-gray-300 transition-colors font-medium border-b border-gray-100 dark:border-gray-700 last:border-none"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
