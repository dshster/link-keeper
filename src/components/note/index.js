import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNote } from '../../actions';
import Note from './note';

function delayedFetchNote(params) {
  const fetchUrl = `http://localhost:3000/api/notes/${params.id}`;

  return dispatch => {
    window.fetch(fetchUrl, {
      method: 'GET',
      accept: 'application/json'
    }).then(response => response.json()
      .then(result => dispatch(fetchNote(result.note))))
  };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: bindActionCreators(delayedFetchNote, dispatch),
});

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
