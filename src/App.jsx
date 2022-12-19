import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={120000} position="Junior SDE" company="Google" />
      <Job salary={100000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  );
};
export default App;
