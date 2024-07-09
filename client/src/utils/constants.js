export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const SOCKET_EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  JOIN_ROOM: 'join_room',
  LEAVE_ROOM: 'leave_room',
  NEW_MESSAGE: 'new_message',
  USER_JOINED: 'user_joined',
  USER_LEFT: 'user_left',
  TYPING: 'typing',
  STOP_TYPING: 'stop_typing'
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const USER_ROLES = {
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin'
};

export const MAX_MESSAGE_LENGTH = 500;

export const BACKROOMS_LEVELS = [
  'The Lobby',
  'The Infinite Hallway',
  'The Electric Room',
  'The Abandoned Office',
  'The Boiler Room',
  'The Void'
];

export const ACHIEVEMENT_TYPES = {
  MESSAGES_SENT: 'messages_sent',
  ROOMS_VISITED: 'rooms_visited',
  TIME_SPENT: 'time_spent',
  FRIENDS_MADE: 'friends_made'
};