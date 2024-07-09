const express = require('express');
const roomController = require('../controllers/roomController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware.authenticate);

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoom);
router.patch('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

module.exports = router;