"use client";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-md mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">404</h1>
      <p className="mb-6 text-base sm:text-lg">
        Sorry, that page doesn't exist!
      </p>
      <Link href={"/"} className="btn btn-outline btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
