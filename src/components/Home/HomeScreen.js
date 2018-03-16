import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.viewCenter}>
        <Text style={{ fontSize: 30 }}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
