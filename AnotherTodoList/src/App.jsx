import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (ev) => {
    setNewTask(ev.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  // TODO: make a new component
  const renderTask = () => {
    return todoList.map((task, key) => {
      return (
        <div key={key}>
          <h1>{task}</h1>
          <button>X</button>
        </div>
      );
    });
  };
  // TODO
  // const deleteTask = () => {

  // }

  return (
    <div className="App">
      <div className="addTask"></div>
      <input type="text" onChange={handleChange} />
      <button onClick={addTask}> Add Task </button>
      <div className="list">{renderTask()}</div>
      <div className="list">{renderTask()}</div>
    </div>
  );
}

export default App;
