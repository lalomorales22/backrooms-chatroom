const Room = require('../../models/Room');
const { createError } = require('../../utils/error');

exports.createRoom = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const newRoom = await Room.create({
      name,
      description,
      createdBy: req.user._id
    });
    res.status(201).json({
      status: 'success',
      data: { room: newRoom }
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find().populate('createdBy', 'username');
    res.status(200).json({
      status: 'success',
      results: rooms.length,
      data: { rooms }
    });
  } catch (err) {
    next(err);
  }
};

exports.getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id).populate('createdBy', 'username');
    if (!room) {
      return next(createError(404, 'No room found with that ID'));
    }
    res.status(200).json({
      status: 'success',
      data: { room }
    });
  } catch (err) {
    next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!room) {
      return next(createError(404, 'No room found with that ID'));
    }
    res.status(200).json({
      status: 'success',
      data: { room }
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return next(createError(404, 'No room found with that ID'));
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    next(err);
  }
};