import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchLinks } from '../../actions';
import List from './list';

function delayedFetchLinks(params) {
  const tag = params ? params.tag : false;
  const limit = 15;

  const fetchUrl = tag
    ? `http://localhost:3000/api/tags/${tag}`
    : `http://localhost:3000/api/links?limit=${limit}`;

  return dispatch => {
    window.fetch(fetchUrl, {
      method: 'GET',
      accept: 'application/json'
    }).then(response => response.json()
      .then(result => dispatch(fetchLinks(result.links))));
  };
}

const mapDispatchToProps = dispatch => ({
  fetchLinks: bindActionCreators(delayedFetchLinks, dispatch),
});

const mapStateToProps = state => ({
  links: state.links
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
