import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNotes } from '../../actions';
import List from './list';

function delayedFetchNotes(params) {
  const tag = params ? params.tag : false;
  const limit = 15;

  const fetchUrl = tag
    ? `http://localhost:3000/api/tags/${tag}`
    : `http://localhost:3000/api/notes?limit=${limit}`;

  return dispatch => {
    window.fetch(fetchUrl, {
      method: 'GET',
      accept: 'application/json'
    }).then(response => response.json()
      .then(result => dispatch(fetchNotes(result.notes))));
  };
}

const mapDispatchToProps = dispatch => ({
  fetchNotes: bindActionCreators(delayedFetchNotes, dispatch),
});

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
