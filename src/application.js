import React, { Component } from 'react';
import Append from './components/append';
import Links from './components/list';

class Application extends Component {
  render() {
    return (
      <div>
        <h1>Application</h1>
        <Append />
        <Links />
      </div>
    );
  }
}

export default Application;
