import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="place-self-center text-center">
      <div className="mb-3">Wrong way!</div>
      <Link href={"/"} className="btn btn-outline">
        Main Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
