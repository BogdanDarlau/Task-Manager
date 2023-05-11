import React, { useState } from "react";
import styles from "../create-task-form/CreateNewTask.module.css";

const CreateNewTask = (props) => {
  const [taskId, setTaskId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");

  const handleIdChange = (event) => {
    setTaskId(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
 
  const handleDetailsChange = (event) => {
    setTaskDetails(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: taskId,
      status: "To do",
      content: taskDetails,
      dueDate: new Date(dueDate),
    };
    setTaskId("");
    setDueDate("");
    setTaskDetails("");

    props.addNewTask(newTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_row}>
          <label className={styles.label_md}>Task ID</label>
          <input
            className={styles.imput_primary}
            value={taskId}
            name="taskId"
            type="text"
            onChange={handleIdChange}
          ></input>
        </div>
        <div className={styles.form_row}>
          <label className={styles.label_md}>Due Date</label>
          <input
            className={styles.imput_primary}
            value={dueDate}
            name="dueDate"
            type="date"
            onChange={handleDateChange}
          ></input>
        </div>
        <div className={styles.form_row}>
          <label className={styles.label_md}>Task Details</label>
          <textarea
            className={styles.imput_primary}
            value={taskDetails}
            name="taskDetails"
            cols="30"
            rows="10"
            onChange={handleDetailsChange}
          ></textarea>
        </div>
        <button
          className={styles.button_primary}
          type="submit"
          onClick={handleSubmit}
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateNewTask;
