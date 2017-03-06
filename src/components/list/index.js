import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchNotes, fetchProcess } from '../../actions';
import List from './list';

function delayedFetchNotes(params) {
  const tag = params ? params.tag : false;
  const limit = 15;

  const fetchUrl = tag
    ? `http://localhost:3000/api/tags/${tag}`
    : `http://localhost:3000/api/notes?limit=${limit}`;

  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(fetchProcess(true));

      window.fetch(fetchUrl, {
        method: 'GET',
        accept: 'application/json'
      }).then(response => response.json()
        .then(result => {
          if (!result.error) {
            dispatch(fetchNotes(result.notes));
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
  fetchNotes: bindActionCreators(delayedFetchNotes, dispatch),
});

const mapStateToProps = state => ({
  notes: state.notes,
  statuses: state.statuses
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
