import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { v4 as uuid } from "uuid";

export interface TasksA {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TasksA[]>([]);

  function addTask(taskContent: string) {
    const id = uuid();
    setTasks([...tasks, { id: id, content: taskContent, isCompleted: false }]);
  }

  function onDeleteTasks(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleCheckBoxToggle(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={onDeleteTasks}
        onComplete={handleCheckBoxToggle}
      />
    </>
  );
}
