import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { auth } from "../config/firebase";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  if (loading) {
    return <h1 className="text-center"> </h1>;
  }
  if (!user) route.push("/auth/login");
  if (user)
    return (
      <div
        className={
          !user
            ? "hidden"
            : "shadow-xl mt-32 p-10 text-gray-700 rounded-lg max-w-2xl m-auto"
        }
      >
        <h1 className="text-center py-8">
          You are now logged in as{" "}
          <span className="text-boon-pink">{user.displayName}</span>
        </h1>
      </div>
    );
}

export default Dashboard;
