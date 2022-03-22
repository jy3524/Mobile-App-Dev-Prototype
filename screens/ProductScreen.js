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
      <Image source={require('../assets/tshirt0.jpg')} style={styles.image} />
      <Text style={styles.title}>Basic T-shirt</Text>
      <Text style={styles.price}>$45</Text>
      <Text style={styles.text}>
        This product was manufactured with ethically sourced cotton which was
        grown without any pesticides or fertilizers in the US. We do not use any
        chemicals to dye this product. We donate 5% of our total profit to
        developing countries to eradicate all the sweatshops.
      </Text>
      <NativeBaseProvider>
        <Box>
          <Button
            alignSelf={'center'}
            bg={'#d0b46b'}
            width={200}
            height={10}
            marginTop={20}
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
    fontFamily: 'futura',
  },
});
