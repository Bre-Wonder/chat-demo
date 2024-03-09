import { useState } from "react";
import {ImageBackground, StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native";

const image = require('../A5-chatapp-assets/Background Image.png');

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.innerContainer}>
        <Text style={styles.text} > Chat Me Up</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder='Type your username here'
          >
          </TextInput>
          <TouchableOpacity
            title="Pick a Background Color "
            onPress={() => navigation.navigate('ChatScreen', {name: name})}
          />
          <Button
            title="Go to Chat Screen"
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
    alignItems: 'center'
  },
  textInput: {
    width: '88%',
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15, 
    textAlign: 'center'
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