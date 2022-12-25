import React from "react";

import Person from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name="John"
        age={30}
        email="email@email.com"
        progLang={["Javascript", "Java", "C#"]}
      />
    </div>
  );
}

export default App;
