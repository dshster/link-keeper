import React from 'react';
import ReactDOM from 'react-dom';
import Application from './application';

describe('Application', () => {
  it('render application without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(<Application />, div);
  });
});
