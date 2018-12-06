import React from 'react';
import Input from './input';
import { connect } from 'react-redux';
import { addTodo } from '../actions/types';

class Form extends React.Component {
  constructor(props) {
    super();

    this._input = null;
  }

  handleSubmission = (evt, dispatch) => {
    evt.preventDefault();
    const submissionVal = this._input.state.text;

    console.log('handle form submission', this.refs['todo-input'].getValue());

    //dispatch(addTodo('todo'));
  }

  componentDidMount() {
    this._input = null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <Input ref="todo-input" />
        <button>Submit</button>
      </form>
    )
  }
}

export default connect()(Form)
//export default Form;
