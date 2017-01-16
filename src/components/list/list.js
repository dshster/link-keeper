import React from 'react';
import { Link } from 'react-router';
import { fetchLinks } from '../../actions';

import Item from '../item';

function delayedFetchLinks() {
  return (dispatch, getState) => {
    const { links } = getState();

    if (links.length === 0) {
      window.fetch('http://localhost:3000/api/links', {
        accept: 'application/json'
      }).then(response => response.json()
        .then(links => dispatch(fetchLinks(links))));
    }
  };
}

const List = ({ dispatch, links }) => {
  dispatch(delayedFetchLinks());

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
