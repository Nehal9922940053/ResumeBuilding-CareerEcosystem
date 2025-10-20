const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  institution: {
    type: String,
    required: [true, 'Please provide institution name'],
  },
  degree: {
    type: String,
    required: [true, 'Please provide degree'],
  },
  fieldOfStudy: {
    type: String,
    required: [true, 'Please provide field of study'],
  },
  startDate: {
    type: Date,
    required: [true, 'Please provide start date'],
  },
  endDate: Date,
  current: {
    type: Boolean,
    default: false,
  },
  grade: String,
  description: String,
  achievements: [String],
  location: String,
  verified: {
    type: Boolean,
    default: false,
  },
  verificationSource: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;