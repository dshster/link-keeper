import React, { Component } from 'react';
import { Link } from 'react-router';

import Item from '../item';

class List extends Component {
  constructor(props) {
    super(props);

    this.props.fetchNotes(props.params);
  }

  componentWillReceiveProps(props) {
    if (this.props.params.tag !== props.params.tag) {
      this.props.fetchNotes(props.params);
    }
  }

  render() {
    const { notes } = this.props;

    return (
      <div className="list">
        <Link to="/append">Append</Link>
        <ul>
          {notes.map(note => <Item {...note} key={note._id}/>)}
        </ul>
      </div>
    );
  }
}

export default List;
