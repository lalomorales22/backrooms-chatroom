import React, { useState, useEffect } from 'react';
import { useChat } from '../hooks/useChat';
import RoomList from '../components/rooms/RoomList';
import ChatWindow from '../components/chat/ChatWindow';
import MessageInput from '../components/chat/MessageInput';

const ChatPage = () => {
  const { currentRoom, joinRoom, leaveRoom, messages, sendMessage } = useChat();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms from API
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/rooms`);
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleRoomSelect = (roomId) => {
    if (currentRoom) {
      leaveRoom();
    }
    joinRoom(roomId);
  };

  const handleSendMessage = (content) => {
    sendMessage(content);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 bg-white border-r border-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Rooms</h2>
        <RoomList rooms={rooms} onRoomSelect={handleRoomSelect} currentRoom={currentRoom} />
      </div>
      <div className="w-3/4 flex flex-col">
        {currentRoom ? (
          <>
            <ChatWindow messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a room to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;