/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Button, Center, NativeBaseProvider} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {productData} from '../database/productData';
import RBSheet from 'react-native-raw-bottom-sheet';

const CartScreen = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);

  const refRBSheet = useRef();

  useFocusEffect(
    useCallback(() => {
      return () => refRBSheet.current?.close();
    }),
  );

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
    // eslint-disable-next-line no-shadow
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
      }
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
      getDataFromDB();
    }
  };

  // const updateQty = async (id, qty) => {
  //   let itemArray = await AsyncStorage.getItem('cartItems');
  //   itemArray = JSON.parse(itemArray);
  //   if (itemArray) {
  //     let array = itemArray;
  //     for (let i = 0; i < array.length; i++) {
  //       if (array[i] === id) {
  //         array[i].qty = qty;
  //       }
  //     }
  //     await AsyncStorage.setItem('cartItems', JSON.stringify(array));
  //     getDataFromDB();
  //   }
  // };

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
            source={data.cartImage}
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
                {'\u0024'}
                {data.productPrice}
              </Text>
            </View>
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
                <TouchableOpacity>
                  {/* onPress={() => updateQty(data.id, data.qty - 1)}> */}
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                    }}
                    source={require('../icons/minus.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text>{data.qty}</Text>
              <View
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  opacity: 0.5,
                }}>
                <TouchableOpacity>
                  {/* onPress={() => updateQty(data.id, data.qty + 1)}> */}
                  <Image
                    style={{
                      width: 15,
                      height: 15,
                    }}
                    source={require('../icons/plus.png')}
                  />
                </TouchableOpacity>
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
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#d8cdb2',
        position: 'relative',
      }}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={require('../icons/cancel.png')}
            style={styles.cancel}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'futura-condensedExtraBold',
            letterSpacing: 1,
            paddingTop: 5,
            paddingLeft: 16,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>
        <View>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'futura-condensedExtraBold',
              letterSpacing: 1,
              paddingTop: 10,
              paddingLeft: 16,
            }}>
            Shipping Address
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'futura',
              letterSpacing: 1,
              paddingTop: 10,
              paddingLeft: 32,
            }}>
            370 Jay St, Brooklyn, NY 11201
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 40,
            marginBottom: 80,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'futura-condensedExtraBold',
              letterSpacing: 1,
              paddingLeft: 0,
            }}>
            Total
          </Text>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'futura-condensedExtraBold',
                letterSpacing: 1,
                paddingTop: 3,
                paddingLeft: 16,
              }}>
              {'\u0024'}
              {total}
            </Text>
          </View>
        </View>
        <NativeBaseProvider>
          <Center>
            <Button
              alignSelf={'center'}
              bg={'#d0b46b'}
              width={300}
              height={10}
              onPress={() => refRBSheet.current.open()}>
              Checkout
            </Button>
          </Center>
        </NativeBaseProvider>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container: {
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              alignItems: 'center',
              backgroundColor: '#cdd6b2',
            },
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000000',
            },
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'futura-condensedExtraBold',
              letterSpacing: 1,
              marginBottom: 10,
              padding: 5,
            }}>
            Payment Method
          </Text>
          <Image
            source={require('../icons/paypal.png')}
            style={styles.paypal}
          />
          <Image source={require('../icons/radio.png')} style={styles.radio} />
          <Text
            style={{
              position: 'absolute',
              marginTop: 85,
              fontFamily: 'futura',
              fontSize: 16,
            }}>
            zzz1231@nyu.edu
          </Text>
          <NativeBaseProvider>
            <Center>
              <Button
                alignSelf={'center'}
                bg={'#d0b46b'}
                width={300}
                height={10}
                onPress={() => navigation.navigate('ConfirmScreen')}>
                Pay
              </Button>
            </Center>
          </NativeBaseProvider>
        </RBSheet>
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
  paypal: {
    position: 'relative',
    marginRight: 200,
    marginTop: 10,
    marginBottom: 50,
    width: 35,
    height: 35,
  },
  radio: {
    position: 'absolute',
    marginRight: 200,
    left: 280,
    top: 85,
  },
});
