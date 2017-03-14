import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, render, mount } from 'enzyme';

import Item from './';

const note = {
  _id: 0,
  datetime: new Date(),
  tags: ['tag1'],
  card: {
    caption: 'caption shallow',
    href: 'href',
    description: 'description',
  }
};

const itemWrapper = mount(<Item {...note}/>);

describe('Item template', () => {
  it('caption', () => {
    expect(itemWrapper.find('.captionLink').map(caption => caption.text())).toContain('caption shallow');
  });

  it('tags', () => {
    expect(itemWrapper.find('.tagsList a').map(caption => caption.text())).toContain('tag1');
  });
});

