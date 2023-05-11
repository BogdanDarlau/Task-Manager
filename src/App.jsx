import React, { useState } from "react";
import "./App.css";
import TaskCard from "./components/task-cards/TaskCard";
import CreateNewTask from "./components/create-task-form/CreateNewTask";

function App() {
  const [data, setData] = useState([
    {
      id: "T-1",
      status: "To do",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 4, 10),
    },
    {
      id: "T-2",
      status: "In Progress",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 4, 14),
    },
    {
      id: "T-3",
      status: "Completed",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 4, 23),
    },
    {
      id: "T-4",
      status: "Waiting",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 5, 3),
    },
    {
      id: "T-5",
      status: "Canceled",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 5, 3),
    },
    {
      id: "T-6",
      status: "In Pause",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 5, 3),
    },
    {
      id: "T-7",
      status: "Finish",
      content: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2023, 5, 3),
    },
  ]);

  const addNewTask = (newTask) => {
    setData((prev) => [...prev, newTask]);
  };

  return (
    <div className="page">
      <h1 className="title">Task Manager</h1>
      <div className="container">
        <TaskCard data={data} />
      </div>
      <div className="side_bar">
        <div className="form">
          <h2>Create Task</h2>
          <CreateNewTask addNewTask={addNewTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
