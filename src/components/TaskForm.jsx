import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Simple Validation ---
    if (!title.trim() || !description.trim()) {
      setError("Please enter both a title and a description.");
      return;
    }

    // Clear any previous error
    setError("");

    const newTask = {
      title,
      description,
      dueDate,
      assignee,
      attachment,
    };

    // Pass the task to App.jsx
    addTask(newTask);

    // Reset fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setAssignee("");
    setAttachment(null);
  };

}