import React, { Component } from 'react';
import Append from './append/append';

class Application extends Component {
  render() {
    return (
      <div>
        <h1>Application</h1>
        <Append />
      </div>
    );
  }
}

export default Application;
