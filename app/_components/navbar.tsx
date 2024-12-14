import Image from "next/image";
import logo from "/public/logosCropped.jpg";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar z-50 bg-base-100 xl:px-64 py-4 ">
      <div className="flex-grow">
        <Link href={"/"}>
          <Image src={logo} width={150} height={150} alt="Colin Chambachan" />
        </Link>
      </div>
      <div className="flex hidden md:inline font-semibold justify-between ">
        <Link href="/about">
          <button className="mx-2 hover:text-primary">about</button>
        </Link>
        <Link href="/experience">
          <button className="mx-2 hover:text-primary">experience</button>
        </Link>
        <Link href="/projects">
          <button className="mx-2 hover:text-primary">projects</button>
        </Link>
        <Link href="/more">
          <button className="mx-2 hover:text-primary">more</button>
        </Link>
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
