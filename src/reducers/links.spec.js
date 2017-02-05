import links from './links';
import { ADD_LINK } from '../actions/types';

const now = new Date();

describe('links reducer', () => {
  it('should handle initial state', () => {
    expect(links(undefined, {})).toEqual([]);
  });

  it('should handle ADD_LINK in empty store', () => {
    expect(links([], {
      type: ADD_LINK,
      link: {
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

  it('should handle ADD_LINK', () => {
    expect(links([{
      _id: 0,
      datetime: now,
      tags: [],
      card: {
        caption: 'caption',
        href: 'href',
        description: 'description',
      }
    }], {
      type: ADD_LINK,
      link: {
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
