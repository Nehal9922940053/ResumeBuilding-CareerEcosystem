const Resume = require('../models/Resume.js');
const User = require('../models/User.js');
const Education = require('../models/Education.js');
const Experience = require('../models/Experience.js');
const Internship = require('../models/Internship.js');
const Course = require('../models/Course.js');
const Hackathon = require('../models/Hackathon.js');
const Project = require('../models/Project.js');
const Skill = require('../models/Skill.js');

const getResume = async (req, res) => {
  try {
    let resume = await Resume.findOne({ user: req.user.id });

    if (!resume) {
      resume = await Resume.create({ user: req.user.id });
    }

    res.status(200).json({
      success: true,
      data: resume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateResume = async (req, res) => {
  try {
    let resume = await Resume.findOne({ user: req.user.id });

    if (!resume) {
      req.body.user = req.user.id;
      resume = await Resume.create(req.body);
    } else {
      resume = await Resume.findByIdAndUpdate(resume._id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(200).json({
      success: true,
      data: resume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCompleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });
    const user = await User.findById(req.user.id);
    const education = await Education.find({ user: req.user.id }).sort({ startDate: -1 });
    const experience = await Experience.find({ user: req.user.id }).sort({ startDate: -1 });
    const internships = await Internship.find({ user: req.user.id }).sort({ startDate: -1 });
    const courses = await Course.find({ user: req.user.id }).sort({ completionDate: -1 });
    const hackathons = await Hackathon.find({ user: req.user.id }).sort({ date: -1 });
    const projects = await Project.find({ user: req.user.id }).sort({ startDate: -1 });
    const skills = await Skill.find({ user: req.user.id }).sort({ category: 1 });

    res.status(200).json({
      success: true,
      data: {
        resume,
        user,
        education,
        experience,
        internships,
        courses,
        hackathons,
        projects,
        skills,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const incrementViews = async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: 'Resume not found',
      });
    }

    resume.views += 1;
    await resume.save();

    res.status(200).json({
      success: true,
      data: resume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getResume,
  updateResume,
  getCompleteResume,
  incrementViews
};