import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Icon, Input, Item } from 'native-base';

const Username = ({ value, onChangeText }) => {
  return (
    <Item>
      <Icon name="person" style={styles.username} />
      <Input placeholder="帳號" onChangeText={v => onChangeText(v)} value={value} />
    </Item>
  );
};

Username.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  username: { fontSize: 30, color: '#384850' },
});

export default Username;
