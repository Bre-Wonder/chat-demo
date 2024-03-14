import { useState } from "react";
import {ImageBackground, StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native";

const image = require('../A5-chatapp-assets/Background Image.png');

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text} > Chat Me Up</Text>
      <View style={styles.innerContainer}>
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
        Choose Background Color
        </Text>
        <View style={styles.colorGrid}>
          <TouchableOpacity  
            style={styles.button1}
            onPress={() => navigation.navigate('ChatScreen', {backgroundColor: '#090C08'})} >
            <Text>       </Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.button2}
            onPress={() => navigation.navigate('ChatScreen', {backgroundColor: '#474056'})} >
            <Text>        </Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.button3}
            onPress={() => navigation.navigate('ChatScreen', {backgroundColor: '#8A95A5'})} >
            <Text>        </Text>
          </TouchableOpacity>
          <TouchableOpacity  
            style={styles.button4}
            onPress={() => navigation.navigate('ChatScreen', {backgroundColor: '#B9C6AE'})} >
            <Text>        </Text>
          </TouchableOpacity>
        </View> 
        <Button
          title="Start Chatting"
          onPress={() => navigation.navigate('ChatScreen', {name: name})}
        />
      </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    width: '88%',
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15, 
    textAlign: 'center'
  },
  text2: {
    width: '88%',
    padding: 10,
    marginTop: 5,
    marginBottom: 15, 
    textAlign: 'left'
  },
  colorGrid: {
  },
  button1: {
    backgroundColor: '#090C08',
    height: 50,
    width: 50,
    borderRadius: 25
  },
  button2: {
    backgroundColor: '#474056',
    height: 50,
    width: 50,
    borderRadius: 25
  },
  button3: {
    backgroundColor: '#8A95A5',
    height: 50,
    width: 50,
    borderRadius: 25
  },
  button4: {
    backgroundColor: '#B9C6AE',
    height: 50,
    width: 50,
    borderRadius: 25
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 45,
    color: '#FFFFFF'
  }
});

export default StartScreen;


// justifyContent: 'center',
// alignItems: 'center'