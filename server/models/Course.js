const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide course title'],
  },
  platform: {
    type: String,
    required: [true, 'Please provide platform name'],
    enum: ['Coursera', 'Udemy', 'edX', 'LinkedIn Learning', 'Pluralsight', 'Other'],
  },
  instructor: String,
  completionDate: Date,
  certificateId: String,
  certificateUrl: String,
  skills: [String],
  description: String,
  duration: String,
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

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;