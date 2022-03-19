// Images from Unsplash
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
        <Image source={require('../assets/image1.jpg')} style={styles.image} />
        <Text style={styles.text}>Home Screen</Text>
      </TouchableOpacity>
      <Image source={require('../assets/image2.jpg')} style={styles.image} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdd6b2',
  },
  image: {
    width: '100%',
    height: '90%',
  },
  text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'futura-condensedExtraBold',
    top: 325,
    left: 110,
  },
});
