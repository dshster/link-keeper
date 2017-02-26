import { ADD_NOTE, FETCH_NOTES, FETCH_NOTE } from '../actions/types';

const note = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const { note } = action;

      return {
        _id: note._id,
        datetime: note.datetime,
        tags: note.tags,
        card: {
          caption: note.card.caption,
          href: note.card.href,
          description: note.card.description,
        },
      };
    default:
      return state;
  }
};

const notes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        note(undefined, action),
        ...state,
      ];
    case FETCH_NOTES:
      return action.notes;
    case FETCH_NOTE:
      return [action.note];
    default:
      return state;
  }
};

export default notes;
