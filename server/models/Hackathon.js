const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide hackathon name'],
  },
  organizer: {
    type: String,
    required: [true, 'Please provide organizer name'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide hackathon date'],
  },
  position: {
    type: String,
    enum: ['Winner', 'Runner-up', 'Finalist', 'Participant'],
  },
  projectName: String,
  description: String,
  technologies: [String],
  teamSize: Number,
  achievements: [String],
  projectUrl: String,
  certificateUrl: String,
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

const Hackathon = mongoose.model('Hackathon', hackathonSchema);

module.exports = Hackathon;