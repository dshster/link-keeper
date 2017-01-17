import { ADD_LINK, UPLOAD_LINK, UPLOADED_LINK, FETCH_LINKS } from './types';

export const appendLink = (link, id = 1) => ({
  type: ADD_LINK,
  id: ++id,
  caption: link.caption,
  url: link.url,
  description: link.description,
});

export const uploadLink = () => ({
  type: UPLOAD_LINK,
});

export const uploadedLink = () => ({
  type: UPLOADED_LINK,
});

export const fetchLinks = links => ({
  type: FETCH_LINKS,
  links,
});
