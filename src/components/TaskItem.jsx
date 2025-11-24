function TaskItem({ task, onDelete, onToggleComplete }) {
  return (
    <div
      className={`card p-3 mb-2 ${
        task.completed ? "border-success bg-light" : ""
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </h5>

          <p className="mb-1">{task.description}</p>

          {task.dueDate && (
            <small className="text-muted">Due: {task.dueDate}</small>
          )}
        </div>

        <div>
          <button
            className="btn btn-sm btn-success me-2"
            onClick={() => onToggleComplete(task.id)}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
