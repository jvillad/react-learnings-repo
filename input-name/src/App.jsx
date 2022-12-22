import { useState } from "react";
import fetchDetails from "./fetchDetails";

const App = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleClick = async () => {
    const data = await fetchDetails(name);
    setDetails(data);
    console.log(data);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter name here"
        id="message"
        onChange={(ev) => {
          setName(ev.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
      <h1>Name: {details.name}</h1>
      <h2>Age: {details.age}</h2>
      <h2>Count: {details.count}</h2>
    </div>
  );
};

export default App;
