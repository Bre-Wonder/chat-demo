import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import startScreen from './Components/startScreen';
import chatScreen from './Components/chatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name='startScreen' component={startScreen}/>
        <Stack.Screen name='chatScreen' component={chatScreen}/>
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
