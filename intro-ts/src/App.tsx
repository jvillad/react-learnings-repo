import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./Nav";
import { Person, framework } from "./pages/Person";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Person"
              element={
                <Person
                  name="John"
                  age={30}
                  email="email@email.com"
                  progLang={["Javascript", "Java", "C#"]}
                  framework={framework.Vue}
                />
              }
            />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
