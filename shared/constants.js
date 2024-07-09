// User roles
exports.USER_ROLES = {
    USER: 'user',
    MODERATOR: 'moderator',
    ADMIN: 'admin'
  };
  
  // Message types
  exports.MESSAGE_TYPES = {
    TEXT: 'text',
    IMAGE: 'image',
    SYSTEM: 'system'
  };
  
  // Room types
  exports.ROOM_TYPES = {
    PUBLIC: 'public',
    PRIVATE: 'private'
  };
  
  // Backrooms levels (for themed rooms)
  exports.BACKROOMS_LEVELS = [
    'The Lobby',
    'Infinite Hallway',
    'The Electric Room',
    'Abandoned Office',
    'Boiler Room',
    'The Void'
  ];
  
  // Maximum lengths
  exports.MAX_MESSAGE_LENGTH = 500;
  exports.MAX_USERNAME_LENGTH = 20;
  exports.MAX_ROOM_NAME_LENGTH = 30;
  
  // Timeouts (in milliseconds)
  exports.TYPING_TIMEOUT = 3000;
  exports.INACTIVITY_TIMEOUT = 300000; // 5 minutes
  
  // Socket events
  exports.SOCKET_EVENTS = {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    JOIN_ROOM: 'join_room',
    LEAVE_ROOM: 'leave_room',
    NEW_MESSAGE: 'new_message',
    USER_TYPING: 'user_typing',
    STOP_TYPING: 'stop_typing'
  };