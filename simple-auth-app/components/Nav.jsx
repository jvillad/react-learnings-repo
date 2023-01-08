import Link from "next/link";

function Nav() {
  return (
    <nav>
      {" "}
      <Link href="/">Brand</Link>
      <ul>
        <Link href="/auth/login">Join Now</Link>
      </ul>
    </nav>
  );
}

export default Nav;
