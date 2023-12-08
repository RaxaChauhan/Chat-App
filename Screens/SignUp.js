
import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../component/FormButton';
import FormInput from '../component/FormInput';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import SocialButton from '../component/SocialButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'


const SignUp = ({ navigation }) => {

  const [userEmail, setEmail] = useState('');
  const [userPw, setPw] = useState('');
  const [userNm, setNm] = useState('');
  

  const handelSignup = async () => {

    try {

      if (userEmail.length <= 0 && userPw.length <= 0 && userNm.length <= 0) {
        alert('Enter SignUp Info');
      } 
      else{

        const isUsercreated = await auth().createUserWithEmailAndPassword(userEmail,userPw);
        try {
          firestore().collection('users').doc(isUsercreated.user.uid).set({
            name: userNm,
            email: userEmail,
            uid: isUsercreated.user.uid
          }).then = () => navigation.navigate("Login");
        } catch (err) {
          alert("st"+err);
          console.log("st"+err);
        }
       
        

      }

    } catch (error) {
      console.log(error);
      alert(error);
    }

  }

  return (

    <View style={styles.container}>

      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={userNm}
        onChangeText={(userNm) => setNm(userNm)}
        placeholderText="User Name"
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false} />

      <FormInput
        labelValue={userEmail}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
        keybordType="email-address" />

      <FormInput
        labelValue={userPw}
        onChangeText={(userPw) => setPw(userPw)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true} />

      <FormButton buttonTitle="Sign Up"
        onPress={() => handelSignup()} />

    </View>
  );
}


export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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