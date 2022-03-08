import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOff,
  faToggleOn,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

const Todo = ({ text, todo, todos, setTodos, completed }) => {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(time);
  }, []);

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

  var today = new Date();
  const time =
    today.getFullYear() +
    ":" +
    today.getMonth() +
    ":" +
    today.getDay() +
    "   " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        <div className="tile-text-area">{text}</div>
        <li className={`todo-item-li`}></li>
        <div className="button-container">
          {timestamp}

          <button layout onClick={completeHandler} className={`completed-btn`}>
            <FontAwesomeIcon
              icon={todo.completed ? faToggleOn : faToggleOff}
              className={`faAdd ${todo.completed ? "on" : ""}`}
            ></FontAwesomeIcon>
          </button>
          <button layout onClick={deleteHandler} className="trash-btn">
            <FontAwesomeIcon
              icon={faTrash}
              className="faTrash"
            ></FontAwesomeIcon>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Todo;
