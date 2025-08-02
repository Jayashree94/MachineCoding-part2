import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTodoList([...todoList, task]);
    setTask(""); // clear input
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 To-Do List</h2>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddTask} style={{ marginLeft: "10px" }}>
        Add Task
      </button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
