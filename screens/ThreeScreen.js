import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ThreeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>3D Screen</Text>
    </View>
  );
};

export default ThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cdd6b2',
  },
});
