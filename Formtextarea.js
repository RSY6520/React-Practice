import React from 'react'
import { useState } from 'react';

export default function Formtextarea() {
    const [textarea, setTextarea] = useState("");
    const [myCar, setMyCar] = useState("Mercedese");
    const setTextvalue = (event) => {
        setTextarea(event.target.value);
    }
    const handleChange = (event) => {
        setMyCar(event.target.vale);
    }
    return (
        <form>
            <textarea value={textarea} onChange={setTextvalue}></textarea>
            <h2>Selection</h2>
            <select value={myCar} onChange={handleChange}> 
                <option value="Audi">Audi</option>
                <option value="Mercedese">Mercedese</option>
                <option value="BMW">BMW</option>
            </select>
        </form>
        );
}