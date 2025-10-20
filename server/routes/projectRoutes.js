const express = require('express');
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  importGithubProjects,
  bulkDeleteProjects,
  getProjectStats,
} = require('../controllers/projectController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getProjects)
  .post(createProject);

router.post('/import-github', importGithubProjects);
router.get('/stats', getProjectStats);
router.delete('/bulk', bulkDeleteProjects);

router.route('/:id')
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;