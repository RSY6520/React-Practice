import React from 'react'
import { useState } from 'react';

export default function Form() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The Name You Entered was ${inputs}.`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name here: 
            <input type="text" value={inputs.username || ""} name="username" id="name" onChange={handleChange}/> 
            </label>
            <label>Enter your age here: 
            <input type="number" value={inputs.age || ""} name="age" id="age" onChange={handleChange}/> 
            </label>
            <input type="submit" />
        </form>
    )
}
