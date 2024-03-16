import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native"; 
import StartScreen from "./StartScreen";

const ChatScreen = ({ route, navigation }) => {

  // Routing in username and background color from StartScreen
  const { name } = route.params;
  const { backgroundColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text>Hello Chat Screen</Text>
    </View>
  );
}

// Styles created for ChatScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChatScreen;