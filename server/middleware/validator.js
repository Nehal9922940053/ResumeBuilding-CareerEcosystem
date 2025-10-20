const { body, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};

const registerValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

const loginValidation = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
];

const educationValidation = [
  body('institution').notEmpty().withMessage('Institution name is required'),
  body('degree').notEmpty().withMessage('Degree is required'),
  body('fieldOfStudy').notEmpty().withMessage('Field of study is required'),
  body('startDate').isISO8601().withMessage('Valid start date is required'),
];

const experienceValidation = [
  body('company').notEmpty().withMessage('Company name is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('employmentType').notEmpty().withMessage('Employment type is required'),
  body('startDate').isISO8601().withMessage('Valid start date is required'),
];

module.exports = {
  validateRequest,
  registerValidation,
  loginValidation,
  educationValidation,
  experienceValidation
};