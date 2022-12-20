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
    const task = {
      id: Date.now(),
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  // TODO: make a new component
  const renderTask = () => {
    return todoList.map((task, key) => {
      return (
        <div key={key}>
          <h1>{task.taskName}</h1>
          <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
      );
    });
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask"></div>
      <input type="text" onChange={handleChange} />
      <button onClick={addTask}> Add Task </button>
      <div className="list">{renderTask()}</div>
    </div>
  );
}

export default App;
