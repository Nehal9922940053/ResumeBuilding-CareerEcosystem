import React, { useState } from 'react';
import { Plus, Trash2, Github, ExternalLink } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const ProjectForm = () => {
  const { resumeData, updateResumeData } = useResume();
const projects = resumeData.projects || [];

  const addProject = () => {
    const newProject = {
      name: '',
      description: '',
      technologies: '',
      githubUrl: '',
      liveUrl: '',
      startDate: '',
      endDate: ''
    };
   const updatedProjects = [...projects, newProject];
    updateResumeData('projects', updatedProjects);
  };

  const updateProject = (index, field, value) => {
    const updated = projects.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    );
    // setProjects(updated);
    updateResumeData('projects', updated);
  };

  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    // setProjects(updated);
    updateResumeData('projects', updated);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Projects</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addProject}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </Button>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Project #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeProject(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Project Name"
                value={project.name}
                onChange={(e) => updateProject(index, 'name', e.target.value)}
                placeholder="e.g., E-commerce Platform"
              />
              <Input
                label="Technologies Used"
                value={project.technologies}
                onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                placeholder="e.g., React, Node.js, MongoDB"
              />
              <Input
                label="GitHub URL"
                value={project.githubUrl}
                onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
                placeholder="https://github.com/username/project"
              />
              <Input
                label="Live Demo URL"
                value={project.liveUrl}
                onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
                placeholder="https://your-project.com"
              />
              <Input
                label="Start Date"
                type="month"
                value={project.startDate}
                onChange={(e) => updateProject(index, 'startDate', e.target.value)}
              />
              <Input
                label="End Date"
                type="month"
                value={project.endDate}
                onChange={(e) => updateProject(index, 'endDate', e.target.value)}
                placeholder="Leave empty if ongoing"
              />
            </div>
            <div className="mt-4">
              <Input
                label="Project Description"
                value={project.description}
                onChange={(e) => updateProject(index, 'description', e.target.value)}
                placeholder="Describe the project, your role, and key features..."
                multiline
                rows={4}
              />
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <div className="mb-4">
              <Github className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">No projects added yet</p>
            </div>
            <Button
              variant="primary"
              onClick={addProject}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Project</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;