import Link from "next/link";

function Nav() {
  return (
    <nav className="flex justify-evenly items-center py-10">
      <Link href="/">Brand</Link>
      <ul>
        <Link
          href="/auth/login"
          className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8"
        >
          Log In
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
