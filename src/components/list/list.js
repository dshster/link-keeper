import React, { Component } from 'react';
import { Link } from 'react-router';

import Item from '../item';

class List extends Component {
  constructor(props) {
    super(props);

    this.props.fetchLinks(props.params);
  }

  componentWillReceiveProps(props) {
    if (this.props.params.tag !== props.params.tag) {
      this.props.fetchLinks(props.params);
    }
  }

  render() {
    const { links } = this.props;

    return (
      <div className="list">
        <Link to="/append">Append</Link>
        <ul>
          {links.map(link => <Item {...link} key={link._id}/>)}
        </ul>
      </div>
    );
  }
}

export default List;
