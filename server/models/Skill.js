const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide skill name'],
  },
  category: {
    type: String,
    enum: ['Programming', 'Framework', 'Database', 'Tool', 'Soft Skill', 'Language', 'Other'],
    required: true,
  },
  proficiency: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'Intermediate',
  },
  yearsOfExperience: Number,
  verified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;