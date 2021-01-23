import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Aditya Verma's first React App</h1>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to Aditya Verma\'s first React App'));
  }
}

export default App;
