import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNote, fetchProcess } from '../../actions';
import Note from './note';

function delayedFetchNote(params) {
  const fetchUrl = `http://localhost:3000/api/notes/${params.id}`;

  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(fetchProcess(true));

      window.fetch(fetchUrl, {
        method: 'GET',
        accept: 'application/json'
      }).then(response => response.json()
        .then(result => {
          if (!result.error) {
            dispatch(fetchNote(result.note));
            dispatch(fetchProcess(false));
            return resolve();
          }

          dispatch(fetchProcess(false));
          reject();
        }));
    });
  };
}

const mapDispatchToProps = dispatch => ({
  fetchNote: bindActionCreators(delayedFetchNote, dispatch),
});

const mapStateToProps = state => ({
  notes: state.notes,
  statuses: state.statuses
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
