import styles from "./badge.module.css";

function Badge(props) {
  return (
    <div className={styles.badge}>
      <p>{props.status}</p>
    </div>
  );
}

export default Badge;



