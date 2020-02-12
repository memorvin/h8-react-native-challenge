import React from 'react'
import TodayScreen from '../screens/Today'
import BookmarkScreen from '../screens/Bookmark'
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PicturesStack from './PicturesStack';

const Tab = createBottomTabNavigator()

export default function HomeNavigation() {
  
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color }) => <MaterialIcons name="today" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={PicturesStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={32} color={color} />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({ color }) => <MaterialIcons name="bookmark" size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}