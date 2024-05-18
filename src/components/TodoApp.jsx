import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  setFilter,
  clearCompleted,
  toggleTheme,
} from "../store/actions";

import { MdWbSunny } from "react-icons/md";
const TodoApp = ({
  todos,
  filter,
  theme,
  addTodo,
  toggleTodo,
  setFilter,
  clearCompleted,
  toggleTheme,
}) => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") return true;
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
  });

  return (
    <div
      className={`container ${theme === "DARK" ? "dark-theme" : "light-theme"}`}
    >
      <header>
        <h1>TODO</h1>
        <button onClick={toggleTheme}>
          <MdWbSunny />
        </button>
      </header>
      <main>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="new-todo"
          onKeyPress={(e) => e.key === "Enter" && handleAddTodo()}
        />
        <ul className="todo-list">
          {filteredTodos.map((todo, index) => (
            <li
              key={index}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
              onClick={() => toggleTodo(index)}
            >
              <input type="checkbox" checked={todo.completed} readOnly />
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
        <footer>
          <span>
            {todos.filter((todo) => !todo.completed).length} items left
          </span>
          <div className="filters">
            <button onClick={() => setFilter("ALL")}>All</button>
            <button onClick={() => setFilter("ACTIVE")}>Active</button>
            <button onClick={() => setFilter("COMPLETED")}>Completed</button>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        </footer>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
  theme: state.theme,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  setFilter,
  clearCompleted,
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
