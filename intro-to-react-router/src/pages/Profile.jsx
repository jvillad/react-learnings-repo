import { ChangeProfile } from "../ChangeProfile";

const Profile = (p) => {
  return (
    <div>
      <h1>Profile</h1>
      <h2>Current user is: {p.userName}</h2>
      <ChangeProfile setUsername={p.setUsername} />
    </div>
  );
};

export default Profile;
