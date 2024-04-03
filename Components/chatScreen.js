import { useEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native"; 

import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';

import AsyncStorage from "@react-native-async-storage/async-storage";

// passing database prop just below
const ChatScreen = ({ route, navigation, db }) => {
  const [messages, setMessages] = useState([]);

  // Routing in username and background color from StartScreen
  const { name } = route.params;
  const { backgroundColor } = route.params;
  const { id } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });

    // using onSnaptshot to use the Real-Time data sychonization functionality to show updates
    // from multiple user and show on each of their screens
    const q = query(collection(db, "chatmessages"), orderBy("createdAt", "desc"));
    const unsubChatMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis())
        })
      });
      setMessages(newMessages);
    });
    
    return() => {
      if (unsubChatMessages) unsubChatMessages();
    }

  }, []);

  // changes the color of the message bubbles from user to user
  const renderBubble = (props) => {
    return <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#000"
        },
        left: {
          backgroundColor: "#FFF"
        }
      }}
    />
  }


  // adds message to the chatmessage collection in the database when user presses send
  const onSend = (newMessages) => {
    addDoc(collection(db, "chatmessages"), newMessages[0])
  }

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <GiftedChat  
        messages={messages}
        renderBubble={renderBubble}
        onSend={messages => onSend(messages)}
        user={{
          _id: id,
          name
        }}      
      />
      { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
  );
}

// Styles created for ChatScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ChatScreen;