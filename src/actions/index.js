import { ADD_NOTE, FETCH_PROCESS, FETCH_NOTES, FETCH_NOTE } from './types';

export const appendNote = note => ({
  type: ADD_NOTE,
  note
});

export const fetchProcess = status => ({
  type: FETCH_PROCESS,
  status,
});

export const fetchNotes = notes => ({
  type: FETCH_NOTES,
  notes,
});

export const fetchNote = note => ({
  type: FETCH_NOTE,
  note,
});
