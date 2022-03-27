import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';

const PurchaseScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../icons/cancel.png')} style={styles.cancel} />
      </TouchableOpacity>
      <Image source={require('../assets/tshirt2.jpg')} style={styles.image} />
      <Text style={styles.title}>Basic T-shirt</Text>
      <Text style={styles.price}>$45</Text>
      <Text style={styles.text}>Size</Text>
      <NativeBaseProvider>
        <Box>
          <Button
            alignSelf={'center'}
            bg={'#d0b46b'}
            width={200}
            height={10}
            marginTop={20}
            onPress={() => navigation.navigate('CartScreen')}>
            Add to cart
          </Button>
        </Box>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default PurchaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8cdb2',
  },
  cancel: {
    marginLeft: 350,
    marginBottom: 20,
    width: 25,
    height: 25,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 30,
    fontFamily: 'futura-condensedExtraBold',
    marginLeft: 120,
    marginTop: 20,
    marginBottom: 10,
  },
  price: {
    fontFamily: 'futura-condensedExtraBold',
    marginLeft: 180,
  },
  text: {
    margin: 15,
    marginLeft: 30,
    fontFamily: 'futura',
  },
});
