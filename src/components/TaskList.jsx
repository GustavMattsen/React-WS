import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <h4>Todos</h4>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;