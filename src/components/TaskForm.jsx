import React, { useState } from "react";
import { useForm } from "react-hook-form";

function TaskForm({ addTask }) {
  const [attachment, setAttachment] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // This runs when the form is valid
  const onSubmit = (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      dueDate: data.dueDate || "",
      assignee: data.assignee || "",
      attachment: attachment || null,
    };

    addTask(newTask);

    reset();               // clears react-hook-form fields
    setAttachment(null);   // clears file input
  };

}