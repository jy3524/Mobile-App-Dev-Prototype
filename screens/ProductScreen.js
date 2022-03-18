import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Product Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d8cdb2',
  },
});
