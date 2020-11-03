// * add the is-completed css class to todo text
function Todo({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo ${todo.isCompleted && "is-completed"}`}>
      <div onClick={() => toggleTodo(index)}>{todo.text}</div>
      <div>
        <button className="delete-btn" onClick={() => deleteTodo(index)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
