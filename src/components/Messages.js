import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setDisplay} from '../actions';

class Messages extends Component {
  render() {
    const messages = this.props.messages.messages;
    return (
      <div className='container'>
        <div id='buttons-container'>
          <button onClick={() => this.props.setDisplay(true)}>Show</button>
          <button onClick={() => this.props.setDisplay(false)}>Hide</button>
        </div>
        <div id='messages-container'>
          {
            this.props.messages.display
              ? messages.map((m, i) => {
                return <div key={i} className='message'>{m}</div>
              })
              : <div></div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {messages: state.messages};
};

export default connect(mapStateToProps, {
  setDisplay
})(Messages);
