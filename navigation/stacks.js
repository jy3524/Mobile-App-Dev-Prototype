import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import PurchaseScreen from '../screens/PurchaseScreen';

const Stack = createStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="PurchaseScreen" component={PurchaseScreen} />
    </Stack.Navigator>
  );
}
