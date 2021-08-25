import React from "react";
import "./App.css";
import TodoListContext from "../../contexts/TodoListContext";
import ToDoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";

const App = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (title) => {
    console.log(title);
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const changeTodo = (id, title) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  React.useEffect(() => {
    if (localStorage.getItem("todos")) {
      const localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    } /* else {
      setTodos([
        {
          title: "Сделать приложение для списка",
          id: Date.now() - 1,
          completed: true,
        },
        {
          title: "Добавить пункты в список",
          id: Date.now(),
          completed: false,
        },
      ]);
    } */
  }, []);

  React.useEffect(() => {
    // console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <header className="app__header"></header>
      <main className="app__content">
        <TodoListContext.Provider
          value={{ addTodo, toggleTodo, changeTodo, deleteTodo }}
        >
          <h1 className="app__title">TO DO LIST</h1>
          <AddTodo />
          <ToDoList todos={todos} />
        </TodoListContext.Provider>
      </main>
      <footer className="app__footer"></footer>
    </div>
  );
};
export default App;
