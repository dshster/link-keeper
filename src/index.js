import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import linksApplication from './reducers';

import Application from './application';

let store = createStore(linksApplication, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  window.document.getElementById('application'),
);
