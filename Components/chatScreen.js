import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native"; 

const ChatScreen = ({ route, navigation }) => {

  const { name } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello Chat Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChatScreen;