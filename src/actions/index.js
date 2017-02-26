import { ADD_LINK, FETCH_PROCESS, FETCH_LINKS, FETCH_NOTE } from './types';

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

export const fetchNote = note => ({
  type: FETCH_NOTE,
  note,
});
