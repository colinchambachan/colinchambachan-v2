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
    </div>
  );
}
