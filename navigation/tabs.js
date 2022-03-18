// Home and 3D icons by Icons8.com
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import ThreeScreen from '../screens/ThreeScreen';
import stacks from './stacks';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 30,
          right: 30,
          elevation: 0,
          backgroundColor: '#c4c4c4',
          opacity: 70,
          borderRadius: 10,
          height: 60,
          shadowColor: '#000000',
          shadowOpacity: 0.06,
          shadowOffset: {width: 5, height: 5},
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={stacks}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Image
                source={require('../icons/home.png')}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7b876d' : '#000000',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="3D"
        component={ThreeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{alignItems: 'center', justifyContent: 'center', top: 15}}>
              <Image
                source={require('../icons/three.png')}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#7b876d' : '#000000',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
