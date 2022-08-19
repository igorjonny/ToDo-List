import TodoLogo from "../assets/Logo.svg";
import styles from "./Header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  onAddTask: (content: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [content, setContent] = useState("");

  function handleTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(content);
    setContent("");
  }

  function contentText(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={TodoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={content}
          onChange={contentText}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
