import React, { useState } from 'react'

function Todo(props) {
    const [toggleEdit, setToggleEdit] = useState(false);
    const [editText, setEditText] = useState(props.text);

    const deleteTodo = () => {
        props.deleteTodo(props.id);
    };

    const editTodo = () => {
        setToggleEdit(true);
    };

    const handleEditInput = (event) => {
        setEditText(event.target.value);
    };

    const acceptEdit = () => {
        props.updateTodo(props.id, editText);
        setToggleEdit(false);
    }

    return (
        <div id={"todo-item-"+props.id} className={toggleEdit ? "editing todo" : "todo"}>
            {!toggleEdit ? 
                <p>{props.text}</p> 
                    : 
                <input value={editText} onChange={handleEditInput} />}
            
            {!toggleEdit ?
                <button onClick={editTodo}>
                    <span className="material-symbols-outlined">edit</span>
                </button> 
                    :
                <button onClick={acceptEdit} className="check">
                    <span className="material-symbols-outlined">check</span>
                </button> 
            }

            <button onClick={deleteTodo} className="delete">
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
    )
}

export default Todo