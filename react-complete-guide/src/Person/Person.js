import React from 'react';
import './Person.css'

const person = (props) => {
    return  (
    <div className="Person">
    <p onClick = {props.click}>Holla There!I am {props.name} , my age is { props.age} </p>
    <p>{props.children}</p>
    <input type="text" onChange = {props.change}></input>
    </div>
    )
}

export default person