const express = require('express');
const {
  updateProfile,
  getProfile,
  getCompleteProfile,
  deleteAccount,
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/profile')
  .get(getProfile)
  .put(updateProfile);

router.get('/complete-profile', getCompleteProfile);
router.delete('/account', deleteAccount);

module.exports = router;