import io from 'socket.io-client';
import { API_BASE_URL } from '../utils/constants';

let socket;

export const initSocket = (token) => {
  socket = io(API_BASE_URL, {
    auth: {
      token: `Bearer ${token}`
    }
  });

  socket.on('connect', () => {
    console.log('Connected to socket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from socket server');
  });

  return socket;
};

export const joinRoom = (roomId) => {
  if (socket) socket.emit('join_room', roomId);
};

export const leaveRoom = (roomId) => {
  if (socket) socket.emit('leave_room', roomId);
};

export const sendMessage = (message, roomId) => {
  if (socket) socket.emit('send_message', { message, roomId });
};

export const onNewMessage = (callback) => {
  if (socket) socket.on('new_message', callback);
};

export const onUserJoined = (callback) => {
  if (socket) socket.on('user_joined', callback);
};

export const onUserLeft = (callback) => {
  if (socket) socket.on('user_left', callback);
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export default {
  initSocket,
  joinRoom,
  leaveRoom,
  sendMessage,
  onNewMessage,
  onUserJoined,
  onUserLeft,
  disconnectSocket
};