import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  person : [
    { id: 'abcd1',name : "Max" , age: 28},
    { id: 'abcd2',name: "Manu" , age: 29},
    { id: 'abcd3',name: "Alex", age: 21}
  ],
  showPerson : false
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

nameChangeHandler = ( event , id ) => {
  const personIndex = this.state.person.findIndex(p => { 
    return p.id === id}
    )
  
  const person = { 
    ...this.state.person
  }
  person.name = event.target.value;

  const persons = [...this.state.person];
  persons[personIndex] = person;

  this.setState({
      person : persons
  })
}

toggleHandler = () => {
  const showable = this.state.showPerson;
  this.setState( { showPerson : !showable});
}

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}


  render() {
    const style = {
      border: '1px solid blue',
      backgroundColor : 'white',
      padding : '8px',
      font : 'inherit',
      cursor: 'pointer'
    };

    let person = null;
    if(this.state.showPerson) {
      person = (
        <div>
        {/* <Person  click= { this.switchEventHandler.bind(this,"Max!")} name = {this.state.person[0].name} age= { this.state.person[0].age}></Person>
        <Person  change= {this.nameChangeHandler} name = {this.state.person[1].name} age= { this.state.person[1].age} > Hobbies: Creating Apps</Person>
        <Person name = {this.state.person[2].name} age= { this.state.person[2].age}></Person> */}

        { this.state.person.map( (person,index) => {
          return <Person
           click= {() => this.deletePersonHandler(index)} 
           name ={ person.name} 
           age = { person.age} 
           key = { person.id} 
           change = {(event) => this.nameChangeHandler(event,person.id)}></Person>
        })};
        </div>
      )
    }


    return (
      <div className="App">
        <h5>Hi, I am a React App</h5>
        <p> I do wonders </p>
        <button style= {style} onClick={this.toggleHandler}>Switch name</button>
         {person}
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a React app !!!'))
  }
}

export default App;
