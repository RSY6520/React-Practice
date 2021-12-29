import {React, useState, useEffect} from 'react'

export default function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [])
    return (
        <>
            <h2>I am render {count} times.</h2>   
        </>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count])
    return (
        <>
         <p>Count: {count}</p>
         <button onClick={() => {setCount((c) => c + 1)}}>+</button>
         <p>Calculation: {calculation}</p>   
        </>
    )
}

function ClearTimer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { 
            setCount((count) => count + 1);
        }, 3000);
        return () => clearTimeout(timer);
    }, [])
    return (<>
        <h2>I have rendered {count} times. I will be cleared using clearTimeout(id) method.</h2>
    </>)
}

export {Counter, ClearTimer}

