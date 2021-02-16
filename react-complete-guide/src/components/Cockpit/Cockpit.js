import React from 'react';
import './cockpit.css';
import Radium, { StyleRoot } from 'radium';

const Cockpit = (props) => {

    const style = {
        border: '1px solid blue',
        backgroundColor : 'green',
        padding : '8px',
        font : 'inherit',
        cursor: 'pointer',
        color: 'white',
        ':hover' : {
          backgroundColor : 'lightgreen',
          color: 'black'
        }
      };

    const count = [];
    if(props.person.length <=2 ){
      count.push('Red');
    }
    if(props.person.length <= 1){
      count.push('Bold');
    }

    if(props.showPersons) {
        style.backgroundColor = "red";
        style[':hover'] = {
        backgroundColor : 'salmon',
        color: 'black'
      }
    }

   return (
    <StyleRoot>
    <div>
    <h5>Hi, I am a React App</h5>
    <p className={count.join(' ')}> I do wonders </p>
    <button style= {style} onClick={props.clicked}>Switch name</button>
    </div>
    </StyleRoot>
   )
}

export default Radium(Cockpit)