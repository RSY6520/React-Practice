import React from 'react'

export default function Table({data}) {
    return (
        <table>
            <thead><tr><th>USERID</th><th>ID</th><th>TITLE</th><th>BODY</th></tr></thead>
            <tbody>{data.map((obj) => {return (<tr key={obj.id}><td>{obj.userId}</td><td>{obj.id}</td><td>{obj.title}</td><td>{obj.body}</td></tr>)})}</tbody>
        </table>
    )
}
