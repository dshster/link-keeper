import { ADD_LINK, FETCH_LINKS, FETCH_NOTE } from '../actions/types';

const link = (state = {}, action) => {
  switch (action.type) {
    case ADD_LINK:
      const { link } = action;

      return {
        _id: link._id,
        datetime: link.datetime,
        tags: link.tags,
        card: {
          caption: link.card.caption,
          href: link.card.href,
          description: link.card.description,
        },
      };
    default:
      return state;
  }
};

const links = (state = [], action) => {
  switch (action.type) {
    case ADD_LINK:
      return [
        link(undefined, action),
        ...state,
      ];
    case FETCH_LINKS:
      return action.links;
    case FETCH_NOTE:
      return [action.note];
    default:
      return state;
  }
};

export default links;
