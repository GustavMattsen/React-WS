import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggleComplete }) {
  return (
    <div className="mt-4">
      <h4>Your Tasks</h4>

      {tasks.length === 0 && (
        <p className="text-muted">No tasks yet. Add one above!</p>
      )}

      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
