import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        placeholder="create your own to do list..."
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Add To List" className="btn" />
    </form>
  );
}

export default TodoForm;
