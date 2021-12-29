import React from 'react'

function Car(props){
    return(<>
        <li>I am {props.brand} Car.</li>
    </>)
}

export default function Garage() {

    const cars = [
        {id:1, brand:'Audi'}, 
        {id:2, brand:'BMW'},
        {id:3, brand:'Range-Rover'},
        {id:4, brand:'Suzuki'}
    ];
    return (
        <>
            <h1>Who are in my Garage.</h1>
            <ul>
            {cars.map((car) => <Car key={car.id} brand={car.brand}></Car>)}
            </ul>
        </>
    )
}
