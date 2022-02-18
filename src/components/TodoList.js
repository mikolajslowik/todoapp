import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            id={todo.id}
            todo={todo}
            completed={todo.completed}
            key={todo.id}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;