const express = require('express');
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware.authenticate);

router.post('/:roomId', messageController.createMessage);
router.get('/:roomId', messageController.getMessagesByRoom);
router.delete('/:id', messageController.deleteMessage);

module.exports = router;