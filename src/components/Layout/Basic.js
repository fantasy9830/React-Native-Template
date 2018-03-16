import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './../Auth/Login';
import Home from './../Home';

const DrawerWrappingScreen = DrawerNavigator({
  HomeStack: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={20} color={tintColor} />
      ),
    },
  },
  Logout: {
    screen: Login,
    navigationOptions: {
      drawerLabel: '登出',
      drawerIcon: ({ tintColor }) => <Icon name="sign-out" size={20} color={tintColor} />,
    },
  },
});

export default DrawerWrappingScreen;
