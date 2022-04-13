/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Box, Button, NativeBaseProvider} from 'native-base';

const ConfirmScreen = ({navigation}) => {
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
          sustainable fashion business. Your order number is #674356.
        </Text>
        <NativeBaseProvider>
          <Box>
            <Button
              alignSelf={'center'}
              bg={'#d0b46b'}
              width={300}
              height={10}
              marginTop={200}
              onPress={() => navigation.navigate('HomeScreen')}>
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
