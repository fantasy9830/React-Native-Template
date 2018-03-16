import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MenuButton from './../Layout/MenuButton';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <MenuButton navigation={navigation} />,
    }),
  },
});
