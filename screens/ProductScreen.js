/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
  ToastAndroid,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';
import {productData} from '../database/productData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductScreen = ({route, navigation}) => {
  const {productID} = route.params;
  const [product, setProduct] = useState({});
  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = async () => {
    for (let i = 0; i < productData.length; i++) {
      if (productData[i].id === productID) {
        await setProduct(productData[i]);
        return;
      }
    }
  };

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        navigation.navigate('HomeScreen');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        navigation.navigate('HomeScreen');
      } catch (error) {
        return error;
      }
    }
  };

  const renderProduct = ({item, index}) => {
    return (
      <View
        style={{
          width: width,
          height: 300,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Image source={require('../icons/cancel.png')} style={styles.cancel} />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#d8cdb2',
          position: 'relative',
        }}>
        <ScrollView>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -10,
            }}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: '16%',
                        backgroundColor: '#000000',
                        height: 2.4,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    />
                  );
                })
              : null}
          </View>
          <Text
            style={{
              fontSize: 32,
              fontFamily: 'futura-condensedExtraBold',
              letterSpacing: 0.5,
              marginVertical: 4,
              marginLeft: 15,
              marginTop: 20,
              marginBottom: 20,
              maxWidth: '84%',
              maxHeight: 44,
            }}>
            {product.productName}
          </Text>
          <Text
            style={{
              fontFamily: 'futura',
              marginLeft: 15,
              marginBottom: 20,
            }}>
            {'\u0024'}{product.productPrice}
          </Text>
          <Text
            style={{
              fontFamily: 'futura',
              marginLeft: 15,
              marginBottom: 20,
            }}>
            {product.description}
          </Text>
          <NativeBaseProvider>
            <Box>
              <Button
                alignSelf={'center'}
                bg={'#d0b46b'}
                width={300}
                height={10}
                marginTop={20}
                onPress={() => addToCart(product.id)}>
                Add to cart
              </Button>
            </Box>
          </NativeBaseProvider>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8cdb2',
  },
  cancel: {
    marginLeft: 350,
    marginBottom: 20,
    width: 25,
    height: 25,
  },
});
