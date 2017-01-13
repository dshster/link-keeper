import links from './links';
import { ADD_LINK } from '../actions/types';

describe('links reducer', () => {
  it('should handle initial state', () => {
    expect(links(undefined, {})).toEqual([]);
  });

  it('should handle ADD_LINK in empty store', () => {
    expect(links([], {
      type: ADD_LINK,
      id: 0,
      caption: 'caption',
      url: 'url',
      description: 'description',
    })).toEqual([{
      id: 0,
      caption: 'caption',
      url: 'url',
      description: 'description',
    }]);
  });

  it('should handle ADD_LINK', () => {
    expect(links([{
      id: 0,
      caption: 'caption',
      url: 'url',
      description: 'description',
    }], {
      type: ADD_LINK,
      id: 1,
      caption: 'another caption',
      url: 'another url',
      description: 'another description',
    })).toEqual([{
      id: 0,
      caption: 'caption',
      url: 'url',
      description: 'description',
    }, {
      id: 1,
      caption: 'another caption',
      url: 'another url',
      description: 'another description',
    }]);
  });
});
