import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../config/firebase";

import Dashboard from "../dashboard";

function Login() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  // Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/dashboard");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  if (loading) return <h1> </h1>;
  return (
    <div>
      <div
        className={
          user
            ? "hidden"
            : "shadow-xl mt-32 p-10 text-gray-700 rounded-lg max-w-2xl m-auto"
        }
      >
        <h2 className="text-3xl font-medium text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          voluptate.
        </h2>

        <div className="py-10 flex justify-center">
          <button
            type="button"
            className="flex gap-4 bg-gray p-4 text-white bg-gray-700 rounded"
            onClick={googleLogin}
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
