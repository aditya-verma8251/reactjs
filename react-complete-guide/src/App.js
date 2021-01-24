import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Staphanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = (newName) => {
    // personsState.persons[0].name = "Aditya"; -> this will not work!!
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Staphanie', age: 27 }
      ]
    })
  }
  displayState = () => {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Aditya Verma's first React App</h1>
        <button onClick={() => this.switchNameHandler('Adi')}>Switch Name</button>
        <button onClick={this.displayState}>View state in console</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click = {this.switchNameHandler.bind(this, 'Michael')}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      // <h1>Another heading</h1> -> This is not allowed since JSX should have one root element
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Aditya Verma\'s first React App'));
  }
}

export default App;

// import React, { useState } from 'react';

// const app = () => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Staphanie', age: 26 }
//     ]
//   });
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Aditya', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Staphanie', age: 27 }
//       ]
//     });
//   };
//   const displayState = () => {
//     console.log(personsState);
//   };
//   return (
//     <div className="App">
//       <h1>Welcome to Aditya Verma's first React App</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <button onClick={displayState}>View state in console</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//     // <h1>Another heading</h1> -> This is not allowed since JSX should have one root element
//   );
// }