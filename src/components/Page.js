import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import Messages from './Messages';

class Page extends Component {
  render() {
    switch (this.props.page) {
      case 'home':
        return (
          <div id="home">
            <Input />
            <Messages />
          </div>
        );
      case 'about':
        return (
          <div id="about">
            <div className="container">
              <p>This is the ABOUT page.</p>
              <p>
                {`There's a fire starting in my heart`}<br />
                {`Reaching a fever pitch and it's bringing me out the dark`}<br />
                {`Finally I can see you crystal clear`}<br />
                {`Go 'head and sell me out and I'll lay your ship bare`}<br />
                {`See how I leave with every piece of you`}<br />
                {`Don't underestimate the things that I will do`}<br />
                {`There's a fire starting in my heart`}<br />
                {`Reaching a fever pitch and its bringing me out the dark`}
              </p>
            </div>
          </div>
        );
      default:
        return <div>Page not found.</div>
    }
  }
}

const mapStateToProps = state => {
  return {page: state.page};
};

export default connect(mapStateToProps, {
})(Page);
