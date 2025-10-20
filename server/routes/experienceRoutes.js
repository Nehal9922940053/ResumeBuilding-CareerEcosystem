const express = require('express');
const {
  getExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} = require('../controllers/experienceController');
const { protect } = require('../middleware/auth');
const { experienceValidation, validateRequest } = require('../middleware/validator');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getExperiences)
  .post(experienceValidation, validateRequest, createExperience);

router.route('/:id')
  .get(getExperience)
  .put(updateExperience)
  .delete(deleteExperience);

module.exports = router;