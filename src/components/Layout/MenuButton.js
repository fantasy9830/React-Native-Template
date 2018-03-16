import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('DrawerOpen')}>
      <Icon name="ios-menu" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menu: { paddingRight: 10, paddingLeft: 10 },
});

MenuButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default MenuButton;
