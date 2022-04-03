/* eslint-disable react-native/no-inline-styles */
// Images from Unsplash
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {productData} from '../database/productData';

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const getDataFromDB = () => {
    let productList = [];

    for (let i = 0; i < productData.length; i++) {
      if (productData[i].category === 'product') {
        productList.push(productData[i]);
      }
    }
    setProducts(productList);
  };

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductScreen', {productID: data.id})
        }
        style={{
          width: '100%',
        }}>
        <View
          style={{
            width: '100%',
            height: 600,
            backgroundColor: '#cdd6b2',
          }}>
          <Image
            source={data.productImage}
            style={{
              width: '100%',
              height: 600,
            }}
          />
          <Text style={styles.text}>{data.productName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        <Image source={require('../icons/cart.png')} style={styles.cart} />
      </TouchableOpacity>
      <ScrollView vertical={true}>
        <View>
          {products.map(data => {
            return <ProductCard data={data} key={data.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'futura-condensedExtraBold',
    top: 325,
    left: 110,
  },
  cart: {
    marginLeft: 35,
    marginTop: 40,
    width: 30,
    height: 30,
  },
});
