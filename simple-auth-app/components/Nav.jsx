import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function Nav() {
  const [user, loading] = useAuthState(auth);
  const logOff = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  if (loading) return <h1 className="py-3.5 text-center ">Loading...</h1>;

  return (
    <nav className="flex justify-evenly items-center py-10">
      <Link href="/">Boon Tribe</Link>
      <ul>
        {!user ? (
          <Link
            href="/auth/login"
            className="py-2 px-4 text-lg bg-[#2babe7] text-white rounded-lg font-medium ml-8"
          >
            Log In
          </Link>
        ) : (
          <Link href="/dashboard">
            <img
              src={user.photoURL}
              alt="user avatar"
              className="rounded-full w-12 h-12"
            />
          </Link>
        )}
      </ul>
      {user && (
        <Link
          href="/"
          className="py-1 px-3 bg-[#2babe7] text-white rounded-lg  ml-2 text-sm"
          onClick={logOff}
        >
          Logout
        </Link>
      )}
    </nav>
  );
}

export default Nav;
