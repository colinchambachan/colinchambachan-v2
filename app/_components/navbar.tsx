"use client";
import Image from "next/image";
import logo from "/public/logosCropped.jpg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      className={`navbar z-50 bg-base-100 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-64 py-3 md:py-4 sticky top-0 ${
        scrolled ? "shadow-md backdrop-blur-sm bg-white/90" : "shadow-sm"
      } transition-all duration-300`}
    >
      <div className="flex-grow">
        <Link href={"/"}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={logo}
              width={120}
              height={120}
              alt="Colin Chambachan"
              className="w-auto h-10 sm:h-12"
              priority
            />
          </motion.div>
        </Link>
      </div>
      <div className="hidden md:flex font-medium gap-1 lg:gap-2">
        {links.map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <motion.button
              className="px-3 lg:px-4 py-2 text-gray-700 transition-colors duration-200 hover:text-primary hover:bg-gray-50 rounded-lg"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.name}
            </motion.button>
          </Link>
        ))}
      </div>
      <div className="md:hidden dropdown dropdown-bottom dropdown-end">
        <motion.div
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded-btn p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <i
            className={`bi ${isMenuOpen ? "bi-x text-lg" : "bi-list text-xl"}`}
          ></i>
        </motion.div>
        <motion.ul
          tabIndex={0}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
            display: isMenuOpen ? "block" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 shadow-lg mt-2 overflow-hidden border border-gray-100"
        >
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              className="border-b border-gray-100 last:border-none"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 10 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${link.link}`}
                onClick={closeMenu}
                className="py-3 px-4 hover:bg-gray-50 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
