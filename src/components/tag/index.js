import React from 'react';
import { Link } from 'react-router'

const Tag = ({ name }) => (
  <li className="tagItem">
    <Link to={`/tag/${name}`}>{name}</Link>
  </li>
);

export default Tag;
