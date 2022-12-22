import { useState } from "react";
import fetchExcuse from "./fetchExcuse";

const App = () => {
  const [excuse, setExcuse] = useState("");

  const handleClick = async (category) => {
    const data = await fetchExcuse(category);
    setExcuse(data[0].excuse);
  };

  return (
    <div className="App">
      <h1>Click button to generate an excuse</h1>
      <button onClick={() => handleClick("family")}>Family</button>
      <button onClick={() => handleClick("office")}>Office</button>
      <button onClick={() => handleClick("funny")}>Funny</button>
      <h2>{excuse}</h2>
    </div>
  );
};

export default App;
