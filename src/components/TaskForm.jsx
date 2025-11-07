import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = { title, description, dueDate, assignee, attachment };
    addTask(newTask);

    // Clear fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setAssignee("");
    setAttachment(null);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm mt-5">
      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="d-flex mb-2">
        <input
          type="date"
          className="form-control me-2"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Assign to (optional)"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
      </div>
      <input
        type="file"
        className="form-control mb-3"
        onChange={(e) => setAttachment(e.target.files[0])}
      />
      <button className="btn btn-primary">+ Add Todo</button>
    </form>
  );
}

export default TaskForm;