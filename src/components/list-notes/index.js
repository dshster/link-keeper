import React from 'react';
import Item from '../item';

const Items = ({ notes }) => (
  <ul>
    {notes.map(note => <Item {...note} key={note._id}/>)}
  </ul>
);

export default Items;
