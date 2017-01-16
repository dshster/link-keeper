import { ADD_LINK, UPLOAD_LINK, UPLOADED_LINK, FETCH_LINKS } from './types';

let nextLinkId = 0;

export const appendLink = link => ({
  type: ADD_LINK,
  id: ++nextLinkId,
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
