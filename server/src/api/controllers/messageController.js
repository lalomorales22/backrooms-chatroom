const Message = require('../../models/Message');
const Room = require('../../models/Room');
const { createError } = require('../../utils/error');

exports.createMessage = async (req, res, next) => {
  try {
    const { content } = req.body;
    const { roomId } = req.params;

    const room = await Room.findById(roomId);
    if (!room) {
      return next(createError(404, 'Room not found'));
    }

    const newMessage = await Message.create({
      content,
      sender: req.user._id,
      room: roomId
    });

    await newMessage.populate('sender', 'username');

    res.status(201).json({
      status: 'success',
      data: { message: newMessage }
    });
  } catch (err) {
    next(err);
  }
};

exports.getMessagesByRoom = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const messages = await Message.find({ room: roomId })
      .populate('sender', 'username')
      .sort('-createdAt');

    res.status(200).json({
      status: 'success',
      results: messages.length,
      data: { messages }
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id);

    if (!message) {
      return next(createError(404, 'Message not found'));
    }

    if (message.sender.toString() !== req.user._id.toString()) {
      return next(createError(403, 'You can only delete your own messages'));
    }

    await message.remove();

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    next(err);
  }
};