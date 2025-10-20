const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide project title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide project description'],
  },
  technologies: [String],
  startDate: Date,
  endDate: Date,
  current: {
    type: Boolean,
    default: false,
  },
  role: String,
  features: [String],
  challenges: String,
  learnings: String,
  githubUrl: String,
  liveUrl: String,
  images: [String],
  category: {
    type: String,
    enum: ['Web', 'Mobile', 'Desktop', 'AI/ML', 'Blockchain', 'IoT', 'Other'],
  },
  isFromGithub: {
    type: Boolean,
    default: false,
  },
  githubStars: Number,
  githubForks: Number,
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;