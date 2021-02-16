import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Radium , { StyleRoot} from 'radium';

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
  const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({person: persons});
}


  render() {
  
    let person = null;
    if(this.state.showPerson) {
      person = (
        <div>
        {/* <Person  click= { this.switchEventHandler.bind(this,"Max!")} name = {this.state.person[0].name} age= { this.state.person[0].age}></Person>
        <Person  change= {this.nameChangeHandler} name = {this.state.person[1].name} age= { this.state.person[1].age} > Hobbies: Creating Apps</Person>
        <Person name = {this.state.person[2].name} age= { this.state.person[2].age}></Person> */} 
        <Person  
         persons = { this.state.person}
         clicked = { this.deletePersonHandler} 
         changed = { this.nameChangeHandler}
         />
        </div>
      )
    }


    return (
      <StyleRoot>
      <div className="App">
         <Cockpit
         showPersons={ this.state.showPerson}
         person = { this.state.person}
         clicked = { this.toggleHandler}
         />
         {person}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'I\'m a React app !!!'))
  }
}

export default Radium(App);
