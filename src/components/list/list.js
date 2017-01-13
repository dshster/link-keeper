import React from 'react';
import { Link } from 'react-router';

const List = ({ links }) => (
  <div className="list">
    <Link to="/append">Append</Link>
    <ul>
      {links.map(link => <li key={link.id}>{link.caption}</li>)}
    </ul>
  </div>
);

export default List;
