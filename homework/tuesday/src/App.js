import React, { Component } from 'react';
import './App.css';
import List from './components/list'
import Options from './components/options'

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      term: '',
      todos: [],
    }

  }

  render() {
    return (
      <div className="App">
        <List todos={this.state.todos} />
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }

  onChange = (evt) => {
    this.setState({
      term: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.term],
      term: '',
    });
  }
}

export default App;
