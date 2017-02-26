import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import notes from './notes';
import statuses from './statuses';

const applicationReducer = combineReducers({
  notes,
  statuses,
  routing: routerReducer,
});

export default applicationReducer;
