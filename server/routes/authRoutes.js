const express = require('express');
const { 
  register, 
  login, 
  getMe, 
  googleAuth, 
  githubAuth,
  updatePassword,
  logout 
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { 
  registerValidation, 
  loginValidation, 
  validateRequest 
} = require('../middleware/validator');

const router = express.Router();

// Public routes
router.post('/register', registerValidation, validateRequest, register);
router.post('/login', loginValidation, validateRequest, login);
router.post('/google', googleAuth);
router.post('/github', githubAuth);

// Protected routes
router.get('/me', protect, getMe);
router.put('/update-password', protect, updatePassword);
router.post('/logout', protect, logout);

module.exports = router;