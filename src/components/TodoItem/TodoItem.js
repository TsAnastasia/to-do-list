import React from "react";
import ToDoListContext from "../../contexts/TodoListContext";
import "./TodoItem.css";

const ToDoItem = ({ todo }) => {
  const { toggleTodo, changeTodo, deleteTodo } =
    React.useContext(ToDoListContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(todo.title);

  const editTodo = (event) => {
    setIsEdit(true);
  };

  const handleChange = (event) => {
    const input = event.target;
    setValue(input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEdit(false);
    changeTodo(todo.id, value);
  };

  return (
    <li className="todo-item">
      <form className="todo-item__form" onSubmit={handleSubmit}>
        <label
          className={`todo-item__mark ${
            todo.completed && "todo-item__mark_completed"
          }`}
        >
          <input
            className="todo-item__checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => {
              toggleTodo(todo.id);
            }}
          />
        </label>
        <input
          className={`todo-item__title ${
            todo.completed && "todo-item__title_completed"
          }`}
          value={value}
          onChange={handleChange}
          disabled={!isEdit}
        />
        <button
          className="todo-item__button todo-item__button_save"
          type="submit"
          disabled={!isEdit}
        />
        <button
          className="todo-item__button todo-item__button_edit"
          type="button"
          disabled={isEdit}
          onClick={editTodo}
        />
        <button
          className="todo-item__button todo-item__button_delete"
          type="button"
          onClick={() => deleteTodo(todo.id)}
        />
      </form>
    </li>
  );
};

export default ToDoItem;
