import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import applicationReducer from './reducers';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
  : applyMiddleware(thunk);

const store = createStore(applicationReducer, {}, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
