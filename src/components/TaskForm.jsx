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
}