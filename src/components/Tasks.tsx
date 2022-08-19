import { ClipboardText } from "phosphor-react";
import { TasksA } from "../App";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  tasks: TasksA[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  const tasksCreates = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;

  return (
    <main className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{tasksCreates}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {tasksCompleted} de {tasksCreates}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            onDelete={onDelete}
            task={task}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <main className={styles.empty}>
            <ClipboardText size={56} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </main>
        )}
      </div>
    </main>
  );
}
