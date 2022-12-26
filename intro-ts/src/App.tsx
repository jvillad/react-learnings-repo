import React from "react";

import { Person, framework } from "./Person";

function App() {
  return (
    <div className="App">
      <Person
        name="John"
        age={30}
        email="email@email.com"
        progLang={["Javascript", "Java", "C#"]}
        framework={framework.Vue}
      />
    </div>
  );
}

export default App;
