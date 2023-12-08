
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import {
  Button,
  Text,
  Image,
  View,
} from 'react-native';


const OnBoarding = ({ navigation }) => {

  return (

    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../images/onboarding-img1.png')} />,
          title: 'Welcome',
          subtitle: 'React Native',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../images/onboarding-img2.png')} />,
          title: 'Chat App',
          subtitle: 'React Native',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../images/onboarding-img3.png')} />,
          title: 'Chat App',
          subtitle: 'React Native',
        },
 
  ]}
    />

  );
}


export default OnBoarding;
