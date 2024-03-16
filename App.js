import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './Components/StartScreen';
import ChatScreen from './Components/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    // Added NavigationContainer in order for user to change screens
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='StartScreen'>
        <Stack.Screen name='StartScreen' component={StartScreen}/>
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
