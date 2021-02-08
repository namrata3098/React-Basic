import React from 'react';

const person = (props) => {
    return  (
    <div>
    <p>Holla There!I am {props.name} , my age is { props.age} </p>
    <p>{props.children}</p>
    </div>
    )
}

export default person