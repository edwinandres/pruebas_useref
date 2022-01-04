import React, { useRef, useState } from 'react'

const FocusApp = () => {

    const [text, setText] = useState("")
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();       
    }


    return (
        <div>
            <h1>Focus App</h1>
            <input 
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default FocusApp
