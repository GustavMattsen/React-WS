import React from "react";

function TaskItem({ task, deleteTask }) {
  return (
    <div className="card mb-2 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <strong>{task.title}</strong>
          {task.description && <p className="mb-1">{task.description}</p>}
          {task.dueDate && (
            <small className="text-muted">Due: {task.dueDate}</small>
          )}
          {task.assignee && (
            <div><small>Assigned to: {task.assignee}</small></div>
          )}
        </div>
        <button className="btn btn-sm btn-danger" onClick={deleteTask}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
