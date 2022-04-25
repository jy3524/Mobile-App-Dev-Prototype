/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfirmScreen = ({navigation}) => {
  const [count, setCount] = useState(5435);

  useEffect(() => {
    if (count !== 0) {
      AsyncStorage.setItem('count', `${count}`);
    }
  }, [count]);

  useEffect(() => {
    AsyncStorage.getItem('count').then(value => {
      if (value) {
        // eslint-disable-next-line radix
        setCount(parseInt(value));
      }
    });
  }, []);

  const onClick = () => {
    navigation.navigate('HomeScreen');
    setCount(prevCount => prevCount + 1);
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
            fontFamily: 'futura',
            fontSize: 18,
            textAlign: 'center',
            margin: 50,
            marginTop: 200,
          }}>
          Your order has been successfully submitted! Thank you for supporting
          sustainable fashion business. Your order number is #{count}.
        </Text>
        <NativeBaseProvider>
          <Box>
            <Button
              alignSelf={'center'}
              bg={'#d0b46b'}
              width={300}
              height={10}
              marginTop={200}
              onPress={onClick}>
              Continue Shopping
            </Button>
          </Box>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  cancel: {
    marginLeft: 350,
    marginBottom: 20,
    width: 25,
    height: 25,
  },
});
