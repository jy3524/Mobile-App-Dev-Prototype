import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate('ProductScreen')}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cdd6b2',
  },
});
