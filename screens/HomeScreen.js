// Images from Unsplash
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView vertical={true}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
          <Image
            source={require('../assets/image0.jpg')}
            style={styles.image}
          />
          <Text style={styles.text}>Men's T-Shirt</Text>
        </TouchableOpacity>
        <Image source={require('../assets/image1.jpg')} style={styles.image} />
        <Image source={require('../assets/image2.jpg')} style={styles.image} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#cdd6b2',
  },
  image: {
    width: '100%',
    height: 600,
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
