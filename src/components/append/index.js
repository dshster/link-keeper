import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appendLink, uploadLink, uploadedLink } from '../../actions';
import Append from './append';

function delayedSubmitLink(action) {
  return (dispatch, getState) => {
    const { links } = getState();

    return new Promise((resolve, reject) => {
      const id = Math.max.apply(this, links.map(link => link.id));

      dispatch(uploadLink());

      window.fetch('http://localhost:3000/api/link', {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(action)
      }).then(response => response.json()
        .then(result => {
          if (!result.error) {
            dispatch(appendLink(action, id));
            dispatch(uploadedLink());
            resolve(result);
          }

          dispatch(uploadedLink());
          reject(result);
        }, error => {
          dispatch(uploadedLink());
          reject(error);
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
