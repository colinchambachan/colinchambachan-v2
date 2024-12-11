import Image from "next/image";
import logo from "/public/logosCropped.jpg";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar z-50 bg-base-100 xl:px-64 py-4 ">
      <div className="flex-1">
        <Link href={"/"}>
          <Image src={logo} width={150} height={150} alt="Colin Chambachan" />
        </Link>
      </div>
      <div className="flex font-semibold justify-between border-black border-1 ">
        <button className="mx-2 hover:text-primary">
          <Link href="/about">about</Link>
        </button>
        <button className="mx-2 hover:text-primary">
          <Link href="/experience">experience</Link>
        </button>
        <button className="mx-2 hover:text-primary">
          <Link href="/projects">projects</Link>
        </button>
        <button className="mx-2 hover:text-primary">
          <Link href="/more">more</Link>
        </button>
      </div>
    </div>
  );
}
