/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import stores from './src/stores';
import App from './src/App';

export default class PusApp extends Component {
  render() {
    return (
      <Provider store={stores}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PusApp', () => PusApp);
