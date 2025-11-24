import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  // The tasks will look like:
  // { id: number, title: string, description: string, completed: boolean }
  const [tasks, setTasks] = useState([]);

  // Add a new task (called from TaskForm after validation)
  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),          // simple unique id
      title: taskData.title,
      description: taskData.description,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  // Delete a task by its id
  const deleteTask = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };
// Toggle the task's "completed" status
  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
  <div className="container-fluid">
    <Header />

    <div className="row">
      {/* Sidebar */}
      <div className="col-12 col-md-3 col-lg-2 p-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-12 col-md-9 col-lg-10">
        <div className="p-4">

          {/* Task Form */}
          <TaskForm onAddTask={addTask} />

          {/* Task List */}
          <TaskList
            tasks={tasks}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />

        </div>
      </div>
    </div>
  </div>
);

}

export default App;