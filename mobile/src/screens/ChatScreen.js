import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useChat } from '../hooks/useChat';
import { useAuth } from '../hooks/useAuth';

const ChatScreen = ({ route }) => {
  const { roomId } = route.params;
  const { messages, sendMessage, joinRoom, leaveRoom } = useChat();
  const { user } = useAuth();
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    joinRoom(roomId);
    return () => leaveRoom(roomId);
  }, [roomId]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      sendMessage(roomId, inputMessage);
      setInputMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View style={[
      styles.messageBubble,
      item.sender._id === user.id ? styles.ownMessage : styles.otherMessage
    ]}>
      <Text style={styles.messageText}>{item.content}</Text>
      <Text style={styles.messageSender}>{item.sender.username}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.messageList}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type a message..."
          placeholderTextColor="#6B5B4F"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8C6',
  },
  messageList: {
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '80%',
  },
  ownMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#79A3B1',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#C8A27C',
  },
  messageText: {
    color: '#F2E8C6',
    fontSize: 16,
  },
  messageSender: {
    color: '#F2E8C6',
    fontSize: 12,
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(200, 162, 124, 0.2)',
  },
  input: {
    flex: 1,
    backgroundColor: '#F2E8C6',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: '#4A3728',
  },
  sendButton: {
    backgroundColor: '#79A3B1',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#F2E8C6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;