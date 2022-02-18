import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faToggleOff,
  faToggleOn,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Todo = ({ text, todo, todos, setTodos, completed }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <div className="tile-text-area">{text}</div>
        <li className={`todo-item-li`}></li>
        <div className="button-container">
          <button onClick={completeHandler} className={`completed-btn`}>
            <FontAwesomeIcon
              icon={todo.completed ? faToggleOn : faToggleOff}
              className={`faAdd ${todo.completed ? "on" : ""}`}
            ></FontAwesomeIcon>
          </button>
          <button onClick={deleteHandler} className="trash-btn">
            <FontAwesomeIcon
              icon={faTrash}
              className="faTrash"
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
