import { ChangeProfile } from "../ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>Profile</h1>
      <h2>Current user is: {userName}</h2>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
