import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from './action';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => bindActionCreators({ login, logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
