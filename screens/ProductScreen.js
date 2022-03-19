import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';

const ProductScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../icons/cancel.png')} style={styles.cancel} />
      </TouchableOpacity>
      <Text style={styles.text}>Product Screen</Text>
      <NativeBaseProvider>
        <Box>
          <Button
            style={styles.button}
            bg={'#d0b46b'}
            width={200}
            onPress={() => navigation.navigate('PurchaseScreen')}>
            Purchase
          </Button>
        </Box>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#d8cdb2',
  },
  cancel: {
    marginRight: 25,
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 325,
    marginRight: 145,
  },
  button: {
    marginTop: 275,
    marginRight: 95,
  },
});
