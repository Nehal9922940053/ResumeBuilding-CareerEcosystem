const express = require('express');
const {
  getHackathons,
  createHackathon,
  updateHackathon,
  deleteHackathon,
} = require('../controllers/hackathonController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getHackathons)
  .post(createHackathon);

router.route('/:id')
  .put(updateHackathon)
  .delete(deleteHackathon);

module.exports = router;