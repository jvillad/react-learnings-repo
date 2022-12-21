const Task = (props) => {
  return (
    <div className="task">
      <h1 style={{ textDecoration: props.taskIsDone && "line-through" }}>
        {props.taskName}
      </h1>
      <button onClick={() => props.doneTask(props.taskId)}>Done</button>
      <button onClick={() => props.deleteTask(props.taskId)}>X</button>
    </div>
  );
};

export default Task;
