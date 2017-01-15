import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import links from './links';

const applicationReducer = combineReducers({
  links,
  routing: routerReducer,
});

export default applicationReducer;
