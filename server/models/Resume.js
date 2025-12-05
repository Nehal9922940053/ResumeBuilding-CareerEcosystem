const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    default: 'My Resume',
  },
  template: {
    type: String,
    enum: ['professional', 'creative', 'minimal'],
    default: 'professional',
  },
  summary: {
    type: String,
    default: '',
  },
  isAIGenerated: {
    type: Boolean,
    default: false,
  },
  sections: {
    education: { type: Boolean, default: true },
    experience: { type: Boolean, default: true },
    internships: { type: Boolean, default: true },
    courses: { type: Boolean, default: true },
    hackathons: { type: Boolean, default: true },
    projects: { type: Boolean, default: true },
    skills: { type: Boolean, default: true },
  },
  customSections: [{
    title: String,
    content: String,
    order: Number,
  }],
  theme: {
    primaryColor: { type: String, default: '#2563eb' },
    fontFamily: { type: String, default: 'Inter' },
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
  lastGenerated: Date,
  pdfUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp
resumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;

//personal information is pending