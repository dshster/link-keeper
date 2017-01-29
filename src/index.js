import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import store, { history } from './store';

import Application from './components/application';
import Append from './components/append';
import Links from './components/list';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Application}>
        <IndexRoute component={Links}/>
        <Route path="/tag/:tag" component={Links}/>
        <Route path="/append" component={Append}/>
      </Route>
    </Router>
  </Provider>,
  window.document.getElementById('application'),
);
