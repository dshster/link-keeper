import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchLinks } from '../../actions';
import List from './list';

function delayedFetchLinks() {
  return (dispatch, getState) => {
    const { links } = getState();

    if (links.length === 0) {
      window.fetch('http://localhost:3000/api/links?limit=5', {
        method: 'GET',
        accept: 'application/json'
      }).then(response => response.json()
        .then(result => dispatch(fetchLinks(result.links))));
    }
  };
}

const mapDispatchToProps = dispatch => ({
  fetchLinks: bindActionCreators(delayedFetchLinks, dispatch),
});

const mapStateToProps = state => ({
  links: state.links
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
