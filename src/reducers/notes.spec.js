import notes from './notes';
import { ADD_NOTE } from '../actions/types';

const now = new Date();

describe('notes reducer', () => {
  it('should handle initial state', () => {
    expect(notes(undefined, {})).toEqual([]);
  });

  it('should handle ADD_NOTE in empty store', () => {
    expect(notes([], {
      type: ADD_NOTE,
      note: {
        _id: 0,
        datetime: now,
        tags: [],
        card: {
          caption: 'caption',
          href: 'href',
          description: 'description',
        }
      }
    })).toEqual([{
      _id: 0,
      datetime: now,
      tags: [],
      card: {
        caption: 'caption',
        href: 'href',
        description: 'description',
      }
    }]);
  });

  it('should handle ADD_NOTE', () => {
    expect(notes([{
      _id: 0,
      datetime: now,
      tags: [],
      card: {
        caption: 'caption',
        href: 'href',
        description: 'description',
      }
    }], {
      type: ADD_NOTE,
      note: {
        _id: 1,
        datetime: now,
        tags: [],
        card: {
          caption: 'another caption',
          href: 'another href',
          description: 'another description',
        }
      }
    })).toEqual([{
      _id: 1,
      datetime: now,
      tags: [],
      card: {
        caption: 'another caption',
        href: 'another href',
        description: 'another description',
      }
    }, {
      _id: 0,
      datetime: now,
      tags: [],
      card: {
        caption: 'caption',
        href: 'href',
        description: 'description',
      }
    }]);
  });
});
