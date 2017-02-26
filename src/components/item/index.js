import React from 'react';
import { Link } from 'react-router';

import Tag from '../tag';

const dateLocaleOptions = ['ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }];
const timeLocaleOptions = ['ru-RU', { hour12: false }];

const Item = ({ card, tags, datetime, shortId }) => (
  <li className="noteItem">
    <Link to={`/note/${shortId}`}>{card.caption}</Link>
    <span className="date">{(new Date(datetime)).toLocaleDateString(...dateLocaleOptions)}</span>
    <span className="time">{(new Date(datetime)).toLocaleTimeString(...timeLocaleOptions)}</span>
    <ul className="tagsList">
      {tags.map(tag => <Tag name={tag} key={tag}/>)}
    </ul>
    <div>{card.description}</div>
  </li>
);

export default Item;
