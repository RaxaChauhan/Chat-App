const MessageStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={({route}) => ({
          title: route.params.userName,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );