import { useState } from "react";
import {ImageBackground, StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Alert} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

const image = require('../A5-chatapp-assets/Background Image.png');


const StartScreen = ({ navigation }) => {
  const auth = getAuth();
  // State that defines both the username of the chat screen
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  //allows React-Native to authenticate the user without the user having to log in, it will remember the users data
  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        navigation.navigate('ChatScreen', {name: name, id: result.user.uid, backgroundColor: backgroundColor});
        Alert.alert("Signed in successfully");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try again later.")
      })
  }

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  }


  return (
    <View style={styles.container}>
      {/* Adding the background image to the background of the first screen */}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
        <Text style={styles.text} > Chat Me Up</Text>
        <View style={styles.innerContainer}>
          {/* Username input box */}
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Your Username Here'
          >
          </TextInput>
          <Text
            style={styles.text2}
            placeholder='Pick a Background Color.'
          >
          Choose Your Background Color
          </Text>
          {/* List of circular buttons that determine what color the background color of the ChatScreen wiill be */}
          <View style={styles.colorGrid}>
            <TouchableOpacity  
              style={[styles.circleButton, {backgroundColor: '#090C08'}]}
              onPress={() => handleColorChange ('#090C08')} >
            </TouchableOpacity>
            <TouchableOpacity  
              style={[styles.circleButton, {backgroundColor: '#474056'}]}
              onPress={() => handleColorChange ('#474056')} >
            </TouchableOpacity>
            <TouchableOpacity  
              style={[styles.circleButton, {backgroundColor: '#8A95A5'}]}
              onPress={() => handleColorChange ('#8A95A5')} >
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.circleButton, {backgroundColor: '#B9C6AE'}]}
              onPress={() => handleColorChange ('#B9C6AE')} >
            </TouchableOpacity>
          </View> 
          {/* Button to navigage to ChatScreen */}
          <TouchableOpacity
            style={styles.button}
            onPress={signInUser}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {Platform.OS === "ios" ? <KeyboardAvoidingView behavior="padding" /> : null}
    </View>

  );
}

// Styles created for StartScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    width: '88%',
    height: '44%',
    alignItems: 'center',  
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3
  },
  textInput: {
    fontSize: 16,
    fontWeight: 300,
    color: '#757083',
    opacity: 0.5,
    width: '88%',
    padding: 15,
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 15, 
    textAlign: 'center'
  },
  text2: {
    fontSize: 16,
    fontWeight: 300,
    color: '#757083',
    opacity: 0.5,
    width: '88%',
    fontSize: 17,
    padding: 5,
    marginTop: 5,
    marginBottom: 15, 
    textAlign: 'center'
  },
  colorGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
  },
  circleButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#757083',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF'
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 45,
    color: '#FFFFFF'
  }
});

export default StartScreen;
