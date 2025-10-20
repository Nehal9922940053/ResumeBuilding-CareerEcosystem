const express = require('express');
const {
  getResume,
  updateResume,
  getCompleteResume,
  incrementViews,
} = require('../controllers/resumeController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getResume)
  .put(updateResume);

router.get('/complete', getCompleteResume);
router.post('/increment-views', incrementViews);

module.exports = router;