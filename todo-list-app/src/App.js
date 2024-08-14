import './App.css';
import AddListItem from './AddListItem';
import TodoList from './TodoList';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{id:0, text: "This is a sample todo."}]);

  const addTodo = (text) => {
    setTodos(prev => [...prev, {id: prev.length, text: text}]);
  };

  const deleteTodo = (id) => {
    let todo = document.querySelector("#todo-item-" + id);
    todo.style.animation = "zoomOut ease-in-out 0.2s";
    todo.style.animationFillMode = "forwards";

    setTimeout(() => {
      setTodos(prev => prev.filter((todo) => todo.id !== id));
    }, 200);
  }

  const updateTodo = (id, text) => {
    setTodos(prev => {
      return prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, text: text };
        } else {
          return todo;
        }
      });
    });
  }

  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <div className="container">
        <AddListItem addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      </div>
    </div>
  );
}

export default App;
