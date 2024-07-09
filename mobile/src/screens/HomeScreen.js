import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { getRooms } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const fetchedRooms = await getRooms();
        setRooms(fetchedRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const renderRoom = ({ item }) => (
    <TouchableOpacity
      style={styles.roomItem}
      onPress={() => navigation.navigate('Chat', { roomId: item._id })}
    >
      <Text style={styles.roomName}>{item.name}</Text>
      <Text style={styles.roomDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the Backrooms, {user?.username}</Text>
      <FlatList
        data={rooms}
        renderItem={renderRoom}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.roomList}
      />
      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.profileButtonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8C6',
    padding: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A3728',
  },
  roomList: {
    paddingBottom: 20,
  },
  roomItem: {
    backgroundColor: 'rgba(200, 162, 124, 0.2)',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A3728',
  },
  roomDescription: {
    fontSize: 14,
    color: '#6B5B4F',
    marginTop: 5,
  },
  profileButton: {
    backgroundColor: '#79A3B1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  profileButtonText: {
    color: '#F2E8C6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;