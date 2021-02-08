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

switchEventHandler = () => {
  this.setState({
      person : [
        {name : "Maxilian" , age: 28},
        {name: "Manu" , age: 29},
        {name: "Alex", age: 23}
      ]
  })
}

  render() {
    return (
      <div className="App">
        <h5>Hi, I am a React App</h5>
        <p> I do wonders </p>
        <button onClick={this.switchEventHandler}>Switch name</button>
        <Person name = {this.state.person[0].name} age= { this.state.person[0].age}></Person>
        <Person name = {this.state.person[1].name} age= { this.state.person[1].age}> Hobbies: Creating Apps</Person>
        <Person name = {this.state.person[2].name} age= { this.state.person[2].age}></Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a React app !!!'))
  }
}

export default App;
