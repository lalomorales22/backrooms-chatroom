const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get('/me', userController.getCurrentUser);
router.patch('/me', userController.updateCurrentUser);
router.get('/:id', userController.getUser);
router.get('/', userController.getAllUsers);

module.exports = router;