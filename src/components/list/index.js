import { connect } from 'react-redux';
import List from './list';

const mapStateToProps = state => ({
  links: state.links
});

export default connect(mapStateToProps)(List);
