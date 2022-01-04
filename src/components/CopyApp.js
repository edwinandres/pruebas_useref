import React, { useRef, useState } from 'react'

const CopyApp = () => {

    const [text, setText] = useState("Hola Mundo")
    const [isCopy, setIsCopy] = useState(false)
    const inputRef = useRef();

    const handleCopy = () => {
        //una forma de copiar texto
        //navigator.clipboard.writeText(text)

        //otra forma de copiar texto
        inputRef.current.select();
        document.execCommand("copy");    
        setIsCopy(true);    
        setTimeout(() => {setIsCopy(false)}, 2000);
        
    }


    return (
        <div>
            <h1>Copy App</h1>
            <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            <button onClick={handleCopy}>Copy</button>
            {isCopy && <p>Copiado</p>}

        </div>
    )
}

export default CopyApp
