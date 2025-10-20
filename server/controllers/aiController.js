const { generateResumeSummary, enhanceProjectDescription } = require('../services/aiService.js');
const Resume = require('../models/Resume.js');
const Education = require('../models/Education.js');
const Experience = require('../models/Experience.js');
const Internship = require('../models/Internship.js');
const Skill = require('../models/Skill.js');
const Project = require('../models/Project.js');

const generateSummary = async (req, res) => {
  try {
    const education = await Education.find({ user: req.user.id });
    const experience = await Experience.find({ user: req.user.id });
    const internships = await Internship.find({ user: req.user.id });
    const skills = await Skill.find({ user: req.user.id });
    const projects = await Project.find({ user: req.user.id });

    const userData = {
      education,
      experience,
      internships,
      skills,
      projects,
    };

    const summary = await generateResumeSummary(userData);

    let resume = await Resume.findOne({ user: req.user.id });
    if (!resume) {
      resume = await Resume.create({
        user: req.user.id,
        summary,
        isAIGenerated: true,
      });
    } else {
      resume.summary = summary;
      resume.isAIGenerated = true;
      await resume.save();
    }

    res.status(200).json({
      success: true,
      data: {
        summary,
        resume,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const enhanceDescription = async (req, res) => {
  try {
    const { projectTitle, technologies } = req.body;

    if (!projectTitle || !technologies) {
      return res.status(400).json({
        success: false,
        message: 'Project title and technologies are required',
      });
    }

    const description = await enhanceProjectDescription(projectTitle, technologies);

    res.status(200).json({
      success: true,
      data: { description },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateSummary,
  enhanceDescription
};