"use client";
import Image from "next/image";
import hero from "/public/hero.jpg";

export default function Home() {
  return (
    <div className="flex-col justify-items-center content-between">
      <div className="hero mt-[-10rem] min-h-screen">
        {/* <div className="hero h-96"> */}
        <div className="flex justify-center text-center xl:justify-normal md:text-left">
          <Image
            src={hero}
            className="max-w-xs 2xl:max-w-sm md:mx-8 xl:mx-12 hidden md:block rounded-full shadow-2xl"
            alt="hi"
          />
          <div className="mt-auto mb-auto">
            <h1 className="text-5xl font-bold">Hi, I'm Colin</h1>
            <p className="py-6">Passionate about Cloud, Data, and AI</p>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_2")?.showModal()}
            >
              View Cheatsheet
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">~/Colin.zip</h3>
          {/* <h6 className="text-gray-500">$ unzip Colin.zip</h6> */}
          <h6 className="text-gray-500">$ cat Colin/quick.txt</h6>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
