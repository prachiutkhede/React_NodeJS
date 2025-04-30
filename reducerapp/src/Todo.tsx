import { useState } from "react";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([""]);
  const handleAddTodo = () => {
    if (!input.trim()) return;

    if (input) {
      const newTodo = [...todo, input];
      console.log("Hell", newTodo);
      setTodo(newTodo);
    }
  };

  const handleDelete = () => {};
  return (
    <div>
      <div> To Do List </div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleAddTodo}>Add</button>
        <button onClick={handleDelete}>Delete</button>
        <ul>
          {todo.map((tod) => (
            <li>{tod}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
