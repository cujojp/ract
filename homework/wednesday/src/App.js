import React, { Component } from 'react';
import Input from './components/input';
import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      term: '',
      todos: []
    }

  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
