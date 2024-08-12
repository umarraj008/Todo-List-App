import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  return (
    <div className="todoListContainer">
        {props.todos.map((todo) => 
            <Todo 
                id={todo.id} 
                text={todo.text} 
                deleteTodo={props.deleteTodo}
            />)
        }
    </div>
  )
}

export default TodoList