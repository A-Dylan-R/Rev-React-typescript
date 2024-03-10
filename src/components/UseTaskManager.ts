import { nanoid } from "nanoid";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
}

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const addTask = (title: string): void => {
    if (title.trim().length === 0) return;
    const newTask: Task = {
      id: nanoid(),
      title: title.trim(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: string): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, updatedTitle: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: updatedTitle.trim() } : task
      )
    );
  };

  const filterTasks = (keyword: string): void => {
    setSearchKeyword(keyword);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return {
    tasks: filteredTasks,
    addTask,
    deleteTask,
    updateTask,
    filterTasks,
  };
};
