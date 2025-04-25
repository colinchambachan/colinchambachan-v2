"use client";
import Image from "next/image";
import logo from "/public/logosCropped.jpg";
import Link from "next/link";
import { useState } from "react";

interface LinkElement {
  name: string;
  link: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links: LinkElement[] = [
    { name: "about", link: "about" },
    { name: "experience", link: "experience" },
    { name: "projects", link: "projects" },
    { name: "more", link: "more" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar z-50 bg-base-100 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-64 py-2 md:py-4 sticky top-0 shadow-sm">
      <div className="flex-grow">
        <Link href={"/"}>
          <Image
            src={logo}
            width={120}
            height={120}
            alt="Colin Chambachan"
            className="w-auto h-8 sm:h-10"
          />
        </Link>
      </div>
      <div className="hidden md:flex font-semibold gap-1 lg:gap-3">
        {links.map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <button className="px-2 lg:px-3 py-2 text-black transition-colors duration-300 ease-in-out hover:text-primary hover:bg-gray-50 rounded-md">
              {link.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="md:hidden dropdown dropdown-bottom dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost rounded-btn p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i
            className={`bi ${isMenuOpen ? "bi-x text-lg" : "bi-list text-xl"}`}
          ></i>
        </div>
        <ul
          tabIndex={0}
          className={`menu dropdown-content bg-base-100 rounded-box z-[1] w-52 shadow-2xl mt-2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="border-b border-gray-100 last:border-none"
            >
              <Link
                href={`/${link.link}`}
                onClick={closeMenu}
                className="py-3 px-4 hover:bg-gray-50"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
