/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {productData} from '../database/productData';

const CartScreen = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData1 = [];
    if (items) {
      productData.forEach(data => {
        if (items.includes(data.id)) {
          productData1.push(data);
          return;
        }
      });
      setProduct(productData1);
      getTotal(productData1);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  const getTotal = productData1 => {
    let total = 0;
    for (let i = 0; i < productData1.length; i++) {
      let productPrice = productData1[i].productPrice;
      total = total + productPrice;
    }
    setTotal(total);
  };

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === id) {
          array.splice(i, 1);
        }
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.key}
        onPress={() =>
          navigation.navigate('ProductScreen', {productID: data.id})
        }
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginright: 22,
          }}>
          <Image
            source={data.productImage}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                fontFamily: 'futura',
                letterSpacing: 1,
              }}>
              {data.productName}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  maxWidth: '100%',
                  fontFamily: 'futura',
                  letterSpacing: 1,
                }}>
                {data.productPrice}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 100,
                    marginRight: 20,
                    padding: 4,
                    borderWidth: 1,
                    opacity: 0.5,
                  }}>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                    }}
                    source={require('../icons/minus.png')}
                  />
                </View>
                <Text>1</Text>
                <View
                  style={{
                    borderRadius: 100,
                    marginLeft: 20,
                    padding: 4,
                    borderWidth: 1,
                    opacity: 0.5,
                  }}>
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                    }}
                    source={require('../icons/plus.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
          <Image
            style={{
              width: 30,
              height: 30,
            }}
            source={require('../icons/trashcan.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#d8cdb2'}}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../icons/cancel.png')}
            style={styles.cancel}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'futura-condensedExtraBold',
            marginLeft: 145,
          }}>
          Order Details
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'futura-condensedExtraBold',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <NativeBaseProvider>
          <Box>
            <Button
              alignSelf={'center'}
              bg={'#d0b46b'}
              width={300}
              height={10}
              marginTop={20}
              onPress={() => navigation.navigate('CartScreen')}>
              Checkout
            </Button>
          </Box>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cancel: {
    marginLeft: 350,
    marginBottom: 20,
    width: 25,
    height: 25,
  },
});
