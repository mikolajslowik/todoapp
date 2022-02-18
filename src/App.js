import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/TodoList";
import Clock from "./components/clock";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <header className="baner">
        <h1>Plan your day!</h1>
        <p>With Slowik's to-do app!</p>
      </header>
      <div className="clock">
        <Clock></Clock>
      </div>

      <div className="form-container">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}
        />
      </div>
      <div className="todolist-container">
        <ToDoList
          filteredTodos={filteredTodos}
          status={status}
          setTodos={setTodos}
          todos={todos}
        ></ToDoList>
      </div>
    </div>
  );
}

export default App;
