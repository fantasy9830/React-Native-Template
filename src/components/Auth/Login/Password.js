import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Icon, Input, Item } from 'native-base';

const Password = ({ value, onChangeText }) => {
  return (
    <Item>
      <Icon name="unlock" style={styles.password} />
      <Input
        secureTextEntry
        placeholder="密碼"
        onChangeText={v => onChangeText(v)}
        value={value}
      />
    </Item>
  );
};

Password.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  password: { fontSize: 30, color: '#384850' },
});

export default Password;
