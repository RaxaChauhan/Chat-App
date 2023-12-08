import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../Screens/Chat';
import Profile from '../Screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Massage from '../Screens/Massage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();



const BottomNav = ({ userInfo, navigation }) => {

  const Tab = createBottomTabNavigator();

  const getTabBarVisibility = (route) => {
    console.log(route);
    
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params;
    console.log(routeName);
    if (routeName === "Chat") {
      return 'none';
    }
    return '';
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" options={({ route }) => ({
        // tabBarLabel: 'Home',

        tabBarStyle: { display: getTabBarVisibility(route) },
        
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbox-ellipses-outline" color={color} size={size} />
        ),
      })} >

        {props => <Massage {...props} userInfo={userInfo} />}

      </Tab.Screen>

      <Tab.Screen name="Profile" 
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }} >

          {props => <Profile {...props} userInfo={userInfo} />}

        </Tab.Screen>
    </Tab.Navigator>
  )
}




export default BottomNav