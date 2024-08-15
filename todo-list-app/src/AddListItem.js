import React, { useState } from 'react'

function AddListItem(props) {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = (e) => {
        if (text.length <= 0) {alert("Please enter some text!"); return;}

        props.addTodo(text);
        setText("");
        e.target.blur();
        document.querySelector("#inputTextarea").style.height = "50px";
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick(e);
        }
    }

    return (
        <div className="addItem">
            <textarea id="inputTextarea" type="text" onChange={handleChange} value={text} placeholder='Enter text here...' onKeyDown={handleKeyDown}></textarea>
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default AddListItem