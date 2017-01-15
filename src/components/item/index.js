import React from 'react';

const Item = ({ caption, url, description}) => (
  <li className="linkItem">
    <a href={url}>{caption}</a>
    <div>{description}</div>
  </li>
);

export default Item;
