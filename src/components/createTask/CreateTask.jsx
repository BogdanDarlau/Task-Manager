import React, { useState } from "react";
import styles from "../createTask/CreateTask.module.css";

const CreateTask = (props) => {
  const [taskId, setTaskId] = useState("");
  const [status, setStatus] = useState("");
  const [requarements, setRequarements] = useState("");
  const [date, setDate] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: taskId,
      status: status,
      content: requarements,
      dueDate: new Date(date),
    };
    props.addNewTask(newTask);
  };

  return (
    <>
      <form>
        TaskID
        <input
          type="text"
          name="taskId"
          value={taskId}
          onChange={(event) => setTaskId(event.target.value)}
        ></input>
        Status
        <input
          type="text"
          name="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        ></input>
        Task Requarements
        <input
          type="text"
          name="requarements"
          value={requarements}
          onChange={(event) => setRequarements(event.target.value)}
        ></input>
        Due Date
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <button onClick={handlerSubmit}>SUBMIT</button>
      </form>
    </>
  );
};

export default CreateTask;
