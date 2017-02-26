import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appendNote, fetchProcess } from '../../actions';
import Append from './append';

function delayedSubmitNote(action) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(fetchProcess(true));

      window.fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(action)
      }).then(response => response.json()
        .then(result => {
          if (!result.error) {
            dispatch(appendNote(result.note));
            dispatch(fetchProcess(false));
            resolve();
          }

          dispatch(fetchProcess(false));
          reject();
        }, error => {
          dispatch(fetchProcess(false));
          reject();
        }));
    });
  };
}

const mapDispatchToProps = dispatch => ({
  appendNote: bindActionCreators(delayedSubmitNote, dispatch),
});

const mapStateToProps = state => ({
  statuses: state.statuses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Append);
