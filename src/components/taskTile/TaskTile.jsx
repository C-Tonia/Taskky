import "./taskTile.css";
const TaskTile = (props) => {
  const task = props.task;

  return (
    <div className="task-tile">
      <div className="task-content">
        <h2>{task.title}</h2>
        <p className="taskTile-body">{task.description}</p>
        <div className="flex">
          <p>
            <span>Due on:</span> {task.date}
          </p>
          <button className="btn" onClick={() => props.removeTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskTile;
