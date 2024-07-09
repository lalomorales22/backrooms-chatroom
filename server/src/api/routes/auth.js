const express = require('express');
const authController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../validators/auth');

const router = express.Router();

router.post('/register', validateRegistration, authController.register);
router.post('/login', validateLogin, authController.login);
router.post('/logout', authController.logout);
router.get('/me', authController.getCurrentUser);
router.post('/refresh-token', authController.refreshToken);

module.exports = router;