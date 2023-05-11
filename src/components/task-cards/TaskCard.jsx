import Reac from "react";
import Badge from "../badge/badge";
import styles from "./TaskCard.module.css";

function TaskCard(props) {
  return (
    <>
      {props.data.map((elem, index) => {
        return (
          <div key={index} className={styles.tasks}>
            <div className={styles.fline}>
              <p className={styles.t1}>{elem.id}</p>
              <Badge status={elem.status} />
            </div>
            <div className={styles.card_content}>
              <p>{elem.content}</p>
            </div>
            <div className={styles.footer}>
              <div className={styles.due_date}>
                <p>Due Date</p>
                <p>{elem.dueDate.toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TaskCard;
