import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import OnBoarding from '../Screens/OnBoarding';
import Login from '../Screens/Login';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import SignUp from '../Screens/SignUp';
import BottomNav from './BottomNav';
import Chat from '../Screens/Chat';
import EditProfile from '../Screens/EditProfile';





const AppStack = createNativeStackNavigator();

const AppNavigator = () => {

  const [isUserlogin, setUserLogin] = useState(false);
  const[userInfo, setusersInfo] = useState('');

  auth().onAuthStateChanged((user) => {

    if (user) {
      setusersInfo(user);
      setUserLogin(true);
      console.log(user);
    }

  })

  const [isFirstLaunch, setisFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {

    return null;

  } else if (isFirstLaunch === true) {
    routeName = 'OnBoarding';
  } else {
    routeName = 'Login';
  }


  return (
    <NavigationContainer>

      <AppStack.Navigator initialRouteName='OnBoarding'>


        {!isUserlogin ? (
        <>
          <AppStack.Screen name='OnBoarding' component={OnBoarding} options={{ header: () => null }} />
          <AppStack.Screen name='Login' component={Login} options={{ header: () => null }} />
          
          <AppStack.Screen
          name='SignUp'
          component={SignUp}
          options={() => ({
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#f9fafd',
            },
          })}
        />
      </>
        ) : null}


        <AppStack.Screen name='BottomNav' options={{ header: () => null }} >
          {props => <BottomNav {...props} userInfo={userInfo} navigation={props.navigation}/> }
        </AppStack.Screen>

        <AppStack.Screen name="Chat" component={Chat}  />

        <AppStack.Screen name="Edit" component={EditProfile}/>

      </AppStack.Navigator>

    </NavigationContainer>

  )


};


export default AppNavigator;
