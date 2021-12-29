import {React, useState, useEffect, useRef} from 'react'

export default function Refhook() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current += 1;
    })
    return (
        <>  
            <h1>Counting Renders.</h1>
            <h2>Here I am counting rendering using useRef, useState, and useEffect Hooks.</h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h2>Total Render: {count.current}</h2>   
        </>
    )
}

    function RefAttribute(){
        const inputElement = useRef();

        const activateFocus = () => {
            inputElement.current.focus();
        }
        return(<>
            <h1>Accessing DOM Element.</h1>
            <h2>Here I am using useRef hook and ref attribute to access DOM element directly.</h2>
            <input type="text" ref={inputElement} />
            <button onClick={activateFocus}>Focus Input</button>
        </>)
    }

    function TrackingState(){
        const [inputValue, setInputValue] = useState("");
        const previousInputValue = useRef("");

        useEffect(() => {
            previousInputValue.current = inputValue;
        }, [inputValue])
        return(<>
            <h1>Trcking State Changes.</h1>
            <h2>Render trigger useEffect and UseEffect updating such a state which is created using useRef that never
                trigger render.
            </h2>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <h2>Current-Value: {inputValue}</h2>
            <h2>Previous-Value: {previousInputValue.current}</h2>

        </>)
    }

export {RefAttribute, TrackingState}
