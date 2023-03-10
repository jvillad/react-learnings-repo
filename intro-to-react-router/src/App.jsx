import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { useState, createContext } from "react";
import { LearningSection } from "./pages/LearningSection";
import Navbar from "./Navbar";
import Profile from "./pages/Profile";
import Form from "./pages/Form";

// global context, can hold all the information of specific component
export const AppContext = createContext();

function App() {
  const [userName, setUsername] = useState("John");
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <Profile
                  name="John"
                  email="email@email.com"
                  age="18"
                  progLang={["JS", "C#", "Java"]}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learning_section" element={<LearningSection />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
