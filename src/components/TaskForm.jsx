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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-3 mb-4 shadow-sm mt-5">
      <h4 className="mb-3">Add a New Task</h4>

      {/* Title */}
      <input
        className="form-control mb-2"
        placeholder="Title (required)"
        {...register("title", { required: "Title is required" })}
      />
      {errors.title && <p className="text-danger">{errors.title.message}</p>}

      {/* Description */}
      <textarea
        className="form-control mb-2"
        placeholder="Description (required)"
        {...register("description", { required: "Description is required" })}
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}

      <div className="d-flex mb-2">
        {/* Due Date */}
        <input
          type="date"
          className="form-control me-2"
          {...register("dueDate")}
        />

        {/* Assignee */}
        <input
          className="form-control"
          placeholder="Assign to (optional)"
          {...register("assignee")}
        />
      </div>

      {/* Attachment */}
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