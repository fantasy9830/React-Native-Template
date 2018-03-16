import React from 'react';
import { connect } from 'react-redux';
import Login from './components/Auth/Login';
import Basic from './components/Layout/Basic';

@connect(state => ({ login: state.user.login }))
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.login ? <Basic /> : <Login />;
  }
}

export default App;
