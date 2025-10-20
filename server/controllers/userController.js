const User = require('../models/User');
const Education = require('../models/Education');
const Experience = require('../models/Experience');
const Internship = require('../models/Internship');
const Course = require('../models/Course');
const Hackathon = require('../models/Hackathon');
const Project = require('../models/Project');
const Skill = require('../models/Skill');

const updateProfile = async (req, res) => {
  try {
    const { fullName, phone, location, website, linkedin, github, bio } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { fullName, phone, location, website, linkedin, github, bio },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getCompleteProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const education = await Education.find({ user: req.user.id });
    const experience = await Experience.find({ user: req.user.id });
    const internships = await Internship.find({ user: req.user.id });
    const courses = await Course.find({ user: req.user.id });
    const hackathons = await Hackathon.find({ user: req.user.id });
    const projects = await Project.find({ user: req.user.id });
    const skills = await Skill.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      data: {
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

const deleteAccount = async (req, res) => {
  try {
    await Education.deleteMany({ user: req.user.id });
    await Experience.deleteMany({ user: req.user.id });
    await Internship.deleteMany({ user: req.user.id });
    await Course.deleteMany({ user: req.user.id });
    await Hackathon.deleteMany({ user: req.user.id });
    await Project.deleteMany({ user: req.user.id });
    await Skill.deleteMany({ user: req.user.id });
    await User.findByIdAndDelete(req.user.id);

    res.status(200).json({
      success: true,
      message: 'Account deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  updateProfile,
  getProfile,
  getCompleteProfile,
  deleteAccount
};