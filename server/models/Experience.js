const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  company: {
    type: String,
    required: [true, 'Please provide company name'],
  },
  position: {
    type: String,
    required: [true, 'Please provide position title'],
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
    required: true,
  },
  location: String,
  startDate: {
    type: Date,
    required: [true, 'Please provide start date'],
  },
  endDate: Date,
  current: {
    type: Boolean,
    default: false,
  },
  description: String,
  responsibilities: [String],
  achievements: [String],
  technologies: [String],
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

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;