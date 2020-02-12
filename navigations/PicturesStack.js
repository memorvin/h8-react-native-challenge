import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PicturesScreen from '../screens/Pictures'
import PictureScreen from '../screens/Picture'

const Stack = createStackNavigator()

export default function PicturesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Pictures"
    >
      <Stack.Screen name="Pictures" component={PicturesScreen}></Stack.Screen>
      <Stack.Screen name="Detail" component={PictureScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}