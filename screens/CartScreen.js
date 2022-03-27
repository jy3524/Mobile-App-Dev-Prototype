import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import store from '../redux/store';

const CartScreen = ({navigation}) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../icons/cancel.png')}
            style={styles.cancel}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Cart</Text>
        <NativeBaseProvider>
          <Box>
            <Button
              alignSelf={'center'}
              bg={'#d0b46b'}
              width={200}
              height={10}
              marginTop={20}
              onPress={() => navigation.navigate('CartScreen')}>
              Checkout
            </Button>
          </Box>
        </NativeBaseProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default CartScreen;

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
