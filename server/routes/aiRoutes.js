const express = require('express');
const {
  generateSummary,
  enhanceDescription,
} = require('../controllers/aiController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.post('/generate-summary', generateSummary);
router.post('/enhance-description', enhanceDescription);

module.exports = router;