import Image from "next/image";
import logo from "/public/logosCropped.jpg";
import Link from "next/link";

interface LinkElement {
  name: string;
  link: string;
}

export default function Navbar() {
  const links: LinkElement[] = [
    { name: "about", link: "about" },
    { name: "experience", link: "experience" },
    { name: "projects", link: "projects" },
    { name: "more", link: "more" },
  ];

  return (
    <div className="navbar z-50 bg-base-100 xl:px-64 py-4 ">
      <div className="flex-grow">
        <Link href={"/"}>
          <Image src={logo} width={150} height={150} alt="Colin Chambachan" />
        </Link>
      </div>
      <div className="flex hidden md:inline font-semibold justify-between ">
        {links.map((link) => (
          <Link key={link.name} href={`/${link.link}`}>
            <button className="mx-2 text-black transition-colors duration-300 ease-in-out hover:text-primary">
              {link.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="md:hidden dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
          <i className="bi bi-list"></i>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 shadow-2xl"
        >
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/experience">experience</Link>
          </li>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/more">more</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
