import { useState, useContext } from "react";
import { AppContext } from "./App";
export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState();
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        type="text"
        onChange={(ev) => {
          setNewUsername(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
