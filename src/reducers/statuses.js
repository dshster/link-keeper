import { UPLOAD_LINK, UPLOADED_LINK } from '../actions/types';

const upload = (state, action) => {
  switch (action.type) {
    case UPLOAD_LINK:
    case UPLOADED_LINK:
      return { upload: state };
    default:
      return state;
  }
};

const statuses = (state = { upload: false }, action) => {
  switch (action.type) {
    case UPLOAD_LINK:
      return upload(true, action);
    case UPLOADED_LINK:
      return upload(false, action);
    default:
      return state;
  }
};

export default statuses;
