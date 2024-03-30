import { useEffect, useState } from "react";
import { Bubble, GiftedChat, renderBubble } from "react-native-gifted-chat";
import { StyleSheet, View, KeyboardAvoidingView, Platform, FlatList, Alert, TouchableOpacity } from "react-native"; 

import { collection, getDocs, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import { async } from "@firebase/util";

// import StartScreen from "./StartScreen"; - not sure if this is needed

// passing database prop just below
const ChatScreen = ({ route, navigation, db }) => {
  const [messages, setMessages] = useState([]);

  // Routing in username and background color from StartScreen
  const { name } = route.params;
  const { backgroundColor } = route.params;

// Moving it outside ******
//using setter method - setMessages to allow useres to send back and forth messages
// setMessages([
//   {
//     _id: 1,
//     text: "Hello Developer",
//     createdAt: new Date(),
//     user: {
//       _id: 2,
//       name: "React Native",
//       avatar: "https://placeimg.com/140/140/any",
//     },
//     //marks message as sent, uses one tick
//     sent: true,
//     //marked message as received, uses two ticks
//     received: true,
//     //marks message as pending, uses clock loader
//     pending: true
//   },
//   {
//     _id: 2,
//     text: 'You have enterd the chat',
//     createdAt: new Date(),
//     system: true,
//   },
// ]);

  // const fetchChatMessages = async () => {
  //   const m = await getDocs(collection(db, "chatmessages"));
  //   let newMessages = [];
  //   m.forEach(docObject => {
  //     newMessages.push({ id: docObject.id, ...docObject.data() })
  //   });
  //     setNewMessages(newMessages);

  // }

  //adds chat messages to the already fetched ones to keep both sides of the conversation going
  // const addChatMessages = async (newMessages) => {
  //   const newMessagesRef = await addDoc(collection(db, "chatmessages"), newMessages);
  //   if (newMessagesRef.id) {
  //     //potentially add line here
  //     Alert.alert(`A new message has been sent`);
  //   }else{
  //     Alert.alert("Unable to send new chat message");
  //   }
  // }

  useEffect(() => {
    navigation.setOptions({ title: name });

    setMessages([
      {
        _id: 1,
        text: "Hello Developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
        //marks message as sent, uses one tick
        sent: true,
        //marked message as received, uses two ticks
        received: true,
        //marks message as pending, uses clock loader
        pending: true
      },
      {
        _id: 2,
        text: 'You have enterd the chat',
        createdAt: new Date(),
        system: true,
      },
    ]);
    
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
          _id: id, name
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