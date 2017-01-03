import { ADD_LINK } from './types';

let nextLinkId = 0;

export const appendLink = link => {
  return {
    type: ADD_LINK,
    id: nextLinkId++,
    caption: link.caption,
    url: link.url,
    description: link.description,
  }
};
