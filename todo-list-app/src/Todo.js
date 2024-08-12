import React from 'react'

function Todo(props) {
    const deleteTodo = () => {
        props.deleteTodo(props.id);
    };

    return (
        <div className="todo">
            <p>{props.text}</p>
            <button onClick={deleteTodo}>
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    )
}

export default Todo