import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Navbar from "./Navbar";
import { useState } from "react";
import Profile from "./pages/Profile";

function App() {
  const [userName, setUsername] = useState("John");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route
            path="/profile"
            element={<Profile userName={userName} setUsername={setUsername} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
