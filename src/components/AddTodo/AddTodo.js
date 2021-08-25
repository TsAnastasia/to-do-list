import React from "react";
import "./AddTodo.css";
import TodoListContext from "../../contexts/TodoListContext";

const AddTodo = () => {
  const { addTodo } = React.useContext(TodoListContext);
  const todoRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoRef.current.value.trim()) {
      addTodo(todoRef.current.value);
    }
    todoRef.current.value = "";
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input className="add-todo__input" type="text" ref={todoRef} />
      <button className="add-todo__button" type="submit">
        Add
      </button>
      <button className="add-todo__button" type="reset">
        Clear
      </button>
    </form>
  );
};

export default AddTodo;
