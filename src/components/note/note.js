import React, { Component } from 'react';

import Tag from '../tag';

const dateLocaleOptions = ['ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }];
const timeLocaleOptions = ['ru-RU', { hour12: false }];

class Note extends Component {
  constructor(props) {
    super(props);

    this.props.fetchNote(props.params);
  }

  render() {
    const { notes } = this.props;
    const note = notes[0];

    return note ? (
        <div className="note">
          <a href={note.card.href}>{note.card.caption}</a>
          < span className="date">{(new Date(note.datetime)).toLocaleDateString(...dateLocaleOptions)}</span>
          <span className="time">{(new Date(note.datetime)).toLocaleTimeString(...timeLocaleOptions)}</span>
          <ul className="tagsList">
            {note.tags.map(tag => <Tag name={tag} key={tag}/>)}
          </ul>
          <div>{note.card.description}</div>
        </div>
      ) : <div>Загрузка...</div>
  }
}

export default Note;
