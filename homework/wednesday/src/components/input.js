import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super();
  }

  handleOnChange = (evt) => {
    evt.preventDefault();

    console.log('handleOnChange');
    this.setState({
      term: evt.target.value
    });     
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({
      todos: [...this.state.todos, this.state.term],
      term: '',
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleOnChange} />
        <button>submit</button>
      </form>
    )
  }
}

export default Input;
