import React from "react";
import Todo from "./Todo";
import { motion } from "framer-motion";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <motion.div className="todo-container">
      {filteredTodos.map((todo) => (
        <div>
          <div className="todo-list">
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              id={todo.id}
              todo={todo}
              completed={todo.completed}
              key={todo.id}
            ></Todo>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ToDoList;
