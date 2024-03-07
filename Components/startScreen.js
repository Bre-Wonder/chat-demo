import { useState } from "react";
import {ImageBackground StyleSheet, View, Text, Button, TextInput } from "react-native";
import BackgroundImage.png from './A5-chatapp-assets/BackgroundImage.png';

const StartScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const image = {uri: ''};

  return (
    <View style={styles.container}>
      <ImageBackground>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder='Type your username here'
      >
      </TextInput>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('ChatScreen', {name: name})}
        />
      </ImageBackground>
      <Text>Hello Start Screen</Text>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  }
});

export default StartScreen;