import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import links from './links';
import statuses from './statuses';

const applicationReducer = combineReducers({
  links,
  statuses,
  routing: routerReducer,
});

export default applicationReducer;
