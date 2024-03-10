// TaskManager.tsx

import React, { useState } from "react";
import { useTaskManager } from "./UseTaskManager";
import "./TaskManager.css";

export const TaskManager = () => {
  const [title, setTitle] = useState("");
  const { tasks, addTask, deleteTask, updateTask, filterTasks } = useTaskManager();

  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    filterTasks(ev.target.value);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input type="text" onChange={handleSearch} placeholder="Search Task" />
      </div>

      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <button onClick={() => addTask(title)}>Add Task</button>
      </div>

      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, e.target.value)}
              />
              <button onClick={() => deleteTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
