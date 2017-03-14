import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import { FETCH_NOTES, FETCH_NOTE, FETCH_PROCESS } from './types';
import { fetchNotes, fetchNote, fetchProcess } from './';

const note = {
  _id: 0,
  datetime: new Date(),
  tags: [],
  card: {
    caption: 'caption',
    href: 'href',
    description: 'description',
  }
};

function delayedFetchNotes() {
  return dispatch => {
    return new Promise(resolve => {
      dispatch(fetchNotes([note]));
      resolve();
    });
  }
}

function delayedFetchNote() {
  return dispatch => {
    return new Promise(resolve => {
      dispatch(fetchNote(note));
      resolve();
    });
  }
}

describe('async action', () => {
  it.skip('creates FETCH_NOTES when fetching notes has been done', done => {
    const store = mockStore({});

    return store.dispatch(delayedFetchNotes()).then(() => {
      expect(store.getActions()).toEqual([{
        notes: [note],
        type: FETCH_NOTES
      }]);
      done();
    });
  });

  it('creates FETCH_NOTE when fetching one note has been done', done => {
    const store = mockStore({});

    return store.dispatch(delayedFetchNote()).then(() => {
      expect(store.getActions()).toEqual([{
        note: note,
        type: FETCH_NOTE
      }]);
      done();
    });
  });
});

describe('sync actions', () => {
  it('FETCH_PROCESS change state to TRUE', () => {
    const store = mockStore({});

    store.dispatch(fetchProcess(true));

    expect(store.getActions()).toEqual([{
      status: true,
      type: FETCH_PROCESS
    }]);
  });

  it('FETCH_PROCESS change state to FALSE', () => {
    const store = mockStore({});

    store.dispatch(fetchProcess(false));

    expect(store.getActions()).toEqual([{
      status: false,
      type: FETCH_PROCESS
    }]);
  });
});
