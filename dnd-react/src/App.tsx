// import { useState } from "react";
import "./App.css";
import { DragAndDrop } from "./components/DragAndDrop";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="container-main flex">
      <Title />
      <DragAndDrop />
    </div>
  );
}

export default App;
