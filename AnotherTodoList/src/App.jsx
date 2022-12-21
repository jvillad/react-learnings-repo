import React from "react";
import "./App.css";
import { useState } from "react";
import Task from "./Task";

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
      isDone: false,
    };
    setTodoList([...todoList, task]);
  };

  // TODO: make a new component
  const renderTask = () => {
    return todoList.map((task, key) => {
      return (
        <Task
          key={key}
          taskName={task.taskName}
          taskId={task.id}
          taskIsDone={task.isDone}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      );
    });
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: true };
        } else {
          return task;
        }
      })
    );
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
