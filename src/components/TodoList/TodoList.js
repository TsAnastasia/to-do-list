import React from "react";
import ToDoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const ToDoList = ({ todos }) => {
  return todos.length ? (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  ) : (
    <p className="todo-list-empty">No todos!</p>
  );
};

export default ToDoList;
