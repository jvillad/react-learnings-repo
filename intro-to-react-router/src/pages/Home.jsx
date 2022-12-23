import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>Home</h1>
      <h2>Logged in as: {userName}</h2>
    </div>
  );
};
