import styles from "./Task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Trash } from "phosphor-react";
import { TasksA } from "../App";

interface TaskProps {
  task: TasksA;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkbox} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.content}
      </p>

      <button className={styles.trashButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
