import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRooms, joinRoom } from '../services/api';

const RoomDiscoveryPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const fetchedRooms = await getRooms();
        setRooms(fetchedRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleJoinRoom = async (roomId) => {
    try {
      await joinRoom(roomId);
      navigate(`/chat/${roomId}`);
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Exploring the endless corridors...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Discover New Realms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 backrooms-room">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">{room.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{room.description}</p>
            <button
              onClick={() => handleJoinRoom(room._id)}
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
            >
              Enter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomDiscoveryPage;