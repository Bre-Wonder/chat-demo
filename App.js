import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import StartScreen from './Components/StartScreen';
import ChatScreen from './Components/ChatScreen';

//Create Navigator move between screens
const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBfQtN1uImKV78l4LQT1143iafwdPZr8x0",
    authDomain: "chat-app-825d1.firebaseapp.com",
    projectId: "chat-app-825d1",
    storageBucket: "chat-app-825d1.appspot.com",
    messagingSenderId: "546065501245",
    appId: "1:546065501245:web:8e2fe566899d1340612e54"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Cloud FireStore and get a reference to the service
  const db = getFirestore(app);

  return (

    // Added NavigationContainer in order for user to change screens
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name='StartScreen' component={StartScreen}/>
        <Stack.Screen name='ChatScreen'>
          {props => <ChatScreen db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles created for App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
