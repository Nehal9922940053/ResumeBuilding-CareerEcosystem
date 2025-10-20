const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  company: {
    type: String,
    required: [true, 'Please provide company name'],
  },
  role: {
    type: String,
    required: [true, 'Please provide internship role'],
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
  location: String,
  description: String,
  learnings: [String],
  projects: [String],
  technologies: [String],
  certificateUrl: String,
  platform: {
    type: String,
    enum: ['Company', 'InternShala', 'LinkedIn', 'Other'],
  },
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

const Internship = mongoose.model('Internship', internshipSchema);

module.exports = Internship;