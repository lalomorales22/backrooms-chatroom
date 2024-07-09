import React, { createContext, useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { AuthContext } from './AuthContext';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const newSocket = io(process.env.REACT_APP_SOCKET_URL, {
        auth: { token: localStorage.getItem('token') }
      });
      setSocket(newSocket);

      return () => newSocket.close();
    }
  }, [user]);

  useEffect(() => {
    if (socket) {
      socket.on('new_message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on('user_joined', (data) => {
        console.log(`${data.username} joined the room`);
        // You can add more logic here, like updating a list of active users
      });

      socket.on('user_left', (data) => {
        console.log(`${data.username} left the room`);
        // You can add more logic here, like updating a list of active users
      });

      return () => {
        socket.off('new_message');
        socket.off('user_joined');
        socket.off('user_left');
      };
    }
  }, [socket]);

  const joinRoom = (roomId) => {
    if (socket) {
      socket.emit('join_room', roomId);
      setCurrentRoom(roomId);
      setMessages([]); // Clear messages when joining a new room
    }
  };

  const leaveRoom = () => {
    if (socket && currentRoom) {
      socket.emit('leave_room', currentRoom);
      setCurrentRoom(null);
      setMessages([]);
    }
  };

  const sendMessage = (content) => {
    if (socket && currentRoom) {
      socket.emit('send_message', { roomId: currentRoom, content });
    }
  };

  const value = {
    socket,
    messages,
    currentRoom,
    joinRoom,
    leaveRoom,
    sendMessage
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};