const express = require('express');
const {
  getInternships,
  createInternship,
  updateInternship,
  deleteInternship,
} = require('../controllers/internshipController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getInternships)
  .post(createInternship);

router.route('/:id')
  .put(updateInternship)
  .delete(deleteInternship);

module.exports = router;