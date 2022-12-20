const Users = (props) => {
  return props.planetType !== false && <h1>{props.planetName}</h1>;
};

export default Users;
