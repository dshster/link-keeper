import React from 'react';

const List = ({ links }) => (
  <ul>
    {links.map(link => <li key={link.id}>{link.caption}</li>)}
  </ul>
);

export default List;
