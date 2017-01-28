import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appendLink, fetchProcess } from '../../actions';
import Append from './append';

function delayedSubmitLink(action) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(fetchProcess(true));

      window.fetch('http://localhost:3000/api/links', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(action)
      }).then(response => response.json()
        .then(result => {
          if (!result.error) {
            dispatch(appendLink(result.link));
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
  appendLink: bindActionCreators(delayedSubmitLink, dispatch),
});

const mapStateToProps = state => ({
  statuses: state.statuses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Append);
