import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import applicationReducer from './reducers';

const enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(applicationReducer, {}, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
