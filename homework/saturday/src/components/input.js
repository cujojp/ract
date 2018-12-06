import React from 'react';
import { connect } from 'react-redux';
import { updateText } from '../actions/types';

class Input extends React.Component {
  constructor(props) {
    super();

    this.state = {
      text: '',
    }
  }

  getValue() {
    return this.state.text;
  }

  handleInputChange = (evt, dispatch) => {
    console.log('handleInputChange', this.state);
    this.setState({
      text: evt.target.value
    })
  }

  render() {
    return (
      <input ref="myinput" onChange={this.handleInputChange} />
    )
  }
}


export default connect()(Input)
