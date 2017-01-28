import { FETCH_PROCESS } from '../actions/types';

const statuses = (state = { fetch: false }, action) => {
  switch (action.type) {
    case FETCH_PROCESS:
      return { fetch: action.status };
    default:
      return state;
  }
};

export default statuses;
