import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const ThreeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../icons/cancel.png')} style={styles.cancel} />
      </TouchableOpacity>
      <Text style={styles.text}>3D Screen</Text>
    </SafeAreaView>
  );
};

export default ThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#cdd6b2',
  },
  cancel: {
    marginRight: 25,
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 325,
    marginRight: 160,
  },
});
