import { useState } from "react";
export const ChangeProfile = (p) => {
  const [newUsername, setNewUsername] = useState();
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
          p.setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
