import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Aditya Verma's first React App</h1>
        <p>This is really working!</p>
      </div>
      // <h1>Another heading</h1> -> This is not allowed since JSX should have one root element
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Aditya Verma\'s first React App'));
  }
}

export default App;
