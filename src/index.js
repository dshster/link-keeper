import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import store, { history } from './store';

import Application from './components/application';
import Append from './components/append';
import Notes from './components/list';
import Note from './components/note';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Application}>
        <IndexRoute component={Notes}/>
        <Route path="/tag/:tag" component={Notes}/>
        <Route path="/note/:id" component={Note}/>
        <Route path="/append" component={Append}/>
      </Route>
    </Router>
  </Provider>,
  window.document.getElementById('application'),
);
