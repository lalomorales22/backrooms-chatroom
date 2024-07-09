const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Room = require('../models/Room');
const Message = require('../models/Message');

module.exports = (io) => {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error'));
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return next(new Error('User not found'));
      }
      socket.user = user;
      next();
    } catch (error) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.user.username}`);

    socket.on('join_room', async (roomId) => {
      try {
        const room = await Room.findById(roomId);
        if (!room) {
          socket.emit('error', 'Room not found');
          return;
        }
        socket.join(roomId);
        console.log(`${socket.user.username} joined room ${room.name}`);
        socket.to(roomId).emit('user_joined', { username: socket.user.username });
      } catch (error) {
        console.error('Error joining room:', error);
        socket.emit('error', 'Failed to join room');
      }
    });

    socket.on('leave_room', async (roomId) => {
      socket.leave(roomId);
      console.log(`${socket.user.username} left room ${roomId}`);
      socket.to(roomId).emit('user_left', { username: socket.user.username });
    });

    socket.on('send_message', async (data) => {
      try {
        const { roomId, content } = data;
        const newMessage = new Message({
          content,
          sender: socket.user._id,
          room: roomId
        });
        await newMessage.save();
        
        const populatedMessage = await Message.findById(newMessage._id)
          .populate('sender', 'username avatar');
        
        io.to(roomId).emit('new_message', populatedMessage);
      } catch (error) {
        console.error('Error sending message:', error);
        socket.emit('error', 'Failed to send message');
      }
    });

    socket.on('typing', (data) => {
      const { roomId } = data;
      socket.to(roomId).emit('user_typing', { username: socket.user.username });
    });

    socket.on('stop_typing', (data) => {
      const { roomId } = data;
      socket.to(roomId).emit('user_stop_typing', { username: socket.user.username });
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.user.username}`);
    });
  });
};