import './App.css';
import AddListItem from './AddListItem';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([{id:0, text: "This is a sample todo."}]);

  const addTodo = (text) => {
    setTodos(prev => [...prev, {id: prev.length, text: text}]);
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1 className="title">Todo App</h1>
      <div className="container">
        <AddListItem addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
