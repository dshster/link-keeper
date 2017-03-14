import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import Items from './';
import Item from '../item';

const notes = [{
  _id: 0,
  datetime: new Date(),
  tags: [],
  card: {
    caption: 'caption shallow',
    href: 'href',
    description: 'description',
  }
}, {
  _id: 1,
  datetime: new Date(),
  tags: [],
  card: {
    caption: 'caption shallow',
    href: 'href',
    description: 'description',
  }
}];

const itemsWrapper = shallow(<Items notes={notes}/>);

describe('Items', () => {
  it('render Items without crashing', () => {
    expect(itemsWrapper.find(Item)).toHaveLength(2);
  });
});
