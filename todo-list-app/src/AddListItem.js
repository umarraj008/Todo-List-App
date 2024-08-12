import React, { useState } from 'react'

function AddListItem(props) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        if (text.length <= 0) {alert("Please enter some text!"); return;}

        props.addTodo(text);
        setText("");
    };

    return (
        <div className="addItem">
            <input type="text" onChange={handleChange} value={text} placeholder='Enter text here...'/>
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default AddListItem