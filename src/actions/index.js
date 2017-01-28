import { ADD_LINK, FETCH_PROCESS, FETCH_LINKS } from './types';

export const appendLink = link => ({
  type: ADD_LINK,
  link
});

export const fetchProcess = status => ({
  type: FETCH_PROCESS,
  status,
});

export const fetchLinks = links => ({
  type: FETCH_LINKS,
  links,
});
