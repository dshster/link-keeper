import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import Append from '../append';

describe('Append', () => {
  it('render application without crashing', () => {
    const div = window.document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <Append/>
      </Provider>,
    div);
  });
});
