import React from 'react';
import { Link } from 'react-router';

import Item from '../item';
const List = ({ fetchLinks, links }) => {

  fetchLinks();

  return (
    <div className="list">
      <Link to="/append">Append</Link>
      <ul>
        {links.map(link => <Item {...link} key={link.id}/>)}
      </ul>
    </div>
  );
};

export default List;
