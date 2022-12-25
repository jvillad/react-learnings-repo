import { ChangeProfile } from "../ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
import PropTypes from "prop-types";
const Profile = (props) => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>Profile</h1>
      <h2>Current user is: {userName}</h2>
      <h2>Name of the user: {props.name}</h2>
      <h2>Email: {props.email}</h2>
      <h2>Age: {props.age}</h2>
      <h2>Programming Language:</h2>
      {props.progLang.map((pl, key) => (
        <h2 key={key}>{pl}</h2>
      ))}
      <ChangeProfile />
    </div>
  );
};

Profile.PropTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  progLang: PropTypes.arrayOf(PropTypes.string),
};

export default Profile;
