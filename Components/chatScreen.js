import { useEffect, useState } from "react";
import { Bubble, GiftedChat, InputToolbar, renderActions } from "react-native-gifted-chat";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native"; 

import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import MapView from 'react-native-maps';

import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomActions from "./CustomActions";

// passing database prop just below
const ChatScreen = ({ route, navigation, db, isConnected, storage }) => {
  const [messages, setMessages] = useState([]);

  // Routing in username and background color from StartScreen
  const { name } = route.params;
  const { backgroundColor } = route.params;
  const { id } = route.params;

  let unsubChatMessages;

  //saves messages in AsyncStorage so that user can view them offline
  const cacheChatMessages = async (messageToCache) => {
    try {
      await AsyncStorage.setItem('chat_messages', JSON.stringify(messageToCache));
    } catch (error) {
      console.log(error.message);
    }
  }
  // loads message saved in AsyncStorage when app is not connected
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("chat_messages") || "[]";
    setMessages(JSON.parse(cachedMessages));
  }

  useEffect(() => {
    navigation.setOptions({ title: name });

    if (isConnected === true) {

      if (unsubChatMessages) unsubChatMessages();
      unsubChatMessages = null;

    // using onSnaptshot to use the Real-Time data sychonization functionality to show updates
    // from multiple user and show on each of their screens
      const q = query(collection(db, "chatmessages"), orderBy("createdAt", "desc"));
      unsubChatMessages = onSnapshot(q, (docs) => {
        let newMessages = [];
        docs.forEach(doc => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          })
        });
        cacheChatMessages(newMessages);
        setMessages(newMessages);
      });
    } else loadCachedMessages();
    
    return() => {
      if (unsubChatMessages) unsubChatMessages();
    }

  }, [isConnected]);


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

  // hides InputToolbar to prevent user from sending a message when isConnected if false
  const renderInputToolbar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  }

  // adds message to the chatmessage collection in the database when user presses send
  const onSend = (newMessages) => {
    addDoc(collection(db, "chatmessages"), newMessages[0])
  }

  const renderCustomActions = (props) => {
    return <CustomActions onSend={onSend} storage={storage} {...props} />;
    }

  const renderCustomView = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return (
        <MapView
          style={{
            width: 150,
            height: 100,
            borderRadius: 13,
            margin: 3}}
          region={{
            latitude: currentMessage.location.latitude,
            longitude: currentMessage.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}        
        />
      );
    }
    return null;
  }

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <GiftedChat  
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        onSend={messages => onSend(messages)}
        renderActions={renderCustomActions}
        renderCustomView={renderCustomView}
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