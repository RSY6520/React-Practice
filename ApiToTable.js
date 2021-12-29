import {React, useState} from 'react'
import Table from './Table';
import './Table.css';

export default function ApiToTable() {
    let [tdata, setTdata] = useState([]);
    let [flag, setFlag] = useState(false);

    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
        .then(data => setTdata(tdata = data));
        setFlag(flag=true);
    }
    return (
        <div className='container'>
            <button onClick={getData}>Get Data</button>
            {flag && <Table data={tdata}/>}
        </div>
    )
}
