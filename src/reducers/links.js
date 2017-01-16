import { ADD_LINK, FETCH_LINKS } from '../actions/types';

const link = (state = {}, action) => {
  switch (action.type) {
    case ADD_LINK:
      return {
        id: action.id,
        caption: action.caption,
        url: action.url,
        description: action.description,
      };
    default:
      return state;
  }
};

const links = (state = [], action) => {
  switch (action.type) {
    case ADD_LINK:
      return [
        ...state,
        link(undefined, action),
      ];
    case FETCH_LINKS:
      return action.links;
    default:
      return state;
  }
};

export default links;
