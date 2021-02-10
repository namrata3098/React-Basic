import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  person : [
    {name : "Max" , age: 28},
    {name: "Manu" , age: 29},
    {name: "Alex", age: 21}
  ]
}

switchEventHandler = ( newName) => {
  this.setState({
      person : [
        {name : newName , age: 28},
        {name: "Manu" , age: 29},
        {name: "Alex", age: 23}
      ]
  })
}

nameChangeHandler = ( event) => {
  this.setState({
      person : [
        {name : "max" , age: 28},
        {name:  event.target.value , age: 29},
        {name: "Alex", age: 23}
      ]
  })
}

  render() {
    const style = {
      border: '1px solid blue',
      backgroundColor : 'white',
      padding : '8px',
      font : 'inherit',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h5>Hi, I am a React App</h5>
        <p> I do wonders </p>
        <button style= {style} onClick={ () => this.switchEventHandler("Maximillian!!")}>Switch name</button>
        <Person  click= { this.switchEventHandler.bind(this,"Max!")} name = {this.state.person[0].name} age= { this.state.person[0].age}></Person>
        <Person  change= {this.nameChangeHandler} name = {this.state.person[1].name} age= { this.state.person[1].age} > Hobbies: Creating Apps</Person>
        <Person name = {this.state.person[2].name} age= { this.state.person[2].age}></Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a React app !!!'))
  }
}

export default App;
