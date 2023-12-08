
import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../component/FormButton';
import FormInput from '../component/FormInput';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import SocialButton from '../component/SocialButton';
import auth from '@react-native-firebase/auth';


const Login = ({ navigation }) => {

  const [userEmail, setEmail] = useState('');
  const [userPw, setPw] = useState('');

  const handeLogin = async () =>{

    try {

      if (userEmail.length > 0 && userPw.length > 0) {
        
        const isUsercreated = await auth().signInWithEmailAndPassword(userEmail,userPw);
        
        navigation.navigate('BottomNav');

      } else {
        alert('Enter Login Info');
      }
      
    } catch (error) {
      alert(error);
    }

  }

  return (

    <View style={styles.container}>
      <Image
        source={require('../assets/main_logo.png')}
        style={styles.logo}
      />

      <Text style={styles.text}>Chat App</Text>

      <FormInput
        labelValue={userEmail}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keybordType="email-address"
        autoCapitalize="none"
        autoCorrect={false} />

      <FormInput
        labelValue={userPw}
        onChangeText={(userPw) => setPw(userPw)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true} />

      <FormButton buttonTitle="Sign In"
        onPress={() => handeLogin()} />

     

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
      </TouchableOpacity>

    </View>

  );
}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});