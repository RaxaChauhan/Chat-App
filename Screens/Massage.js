import React,{useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MassageStyles';
import firestore from '@react-native-firebase/firestore';

/*const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/main_logo.png'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/main_logo.png'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/main_logo.png'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/main_logo.png'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/main_logo.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];*/


const Massage = ( { userInfo, navigation } ) => {
  
  const [users, setusers] = useState(null)
  const getUser = async () => {
    const querySnap = await firestore().collection('users').where('uid','!=',userInfo.uid).get()
    const allusers = querySnap.docs.map(docSnap => docSnap.data())
    
    setusers(allusers)
  }

  useEffect( () => {
    getUser()
  },[])

  return (
    <Container>
    <FlatList 
      data={users}
      keyExtractor={item=>item.uid}
      renderItem={({item}) => (
        <Card onPress={() => navigation.navigate("Chat", {userName: item.name})}>
          <UserInfo>
            <UserImgWrapper>
              <UserImg source={require('../assets/main_logo.png')} />
            </UserImgWrapper>
            <TextSection>
              <UserInfoText>
                <UserName>{item.name}</UserName>
                <PostTime>2hours ago</PostTime>
              </UserInfoText>
              <MessageText>hello how are you</MessageText>
            </TextSection>
          </UserInfo>
        </Card>
      )}
    />
  </Container>
  )
}

export default Massage

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});