const express = require('express');
const {
  getEducations,
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
  bulkDeleteEducation,
} = require('../controllers/educationController');
const { protect } = require('../middleware/auth');
const { educationValidation, validateRequest } = require('../middleware/validator');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getEducations)
  .post(educationValidation, validateRequest, createEducation);

router.delete('/bulk', bulkDeleteEducation);

router.route('/:id')
  .get(getEducation)
  .put(updateEducation)
  .delete(deleteEducation);

module.exports = router;