import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const ExperienceForm = () => {
  const { resumeData, updateResumeData } = useResume();
const experiences = resumeData.experience || [];

  const addExperience = () => {
    const newExperience = {
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    // setExperiences([...experiences, newExperience]);
    const updatedExperiences = [...experiences, newExperience];
    updateResumeData('experience', updatedExperiences);
  };

  const updateExperience = (index, field, value) => {
    const updated = experiences.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    // setExperiences(updated);
    updateResumeData('experience', updated);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    // setExperiences(updated);
    updateResumeData('experience', updated);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Work Experience</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addExperience}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </Button>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Experience #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Position"
                value={experience.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                placeholder="e.g., Software Engineer"
              />
              <Input
                label="Company"
                value={experience.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                placeholder="e.g., Google"
              />
              <Input
                label="Start Date"
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
              />
              <Input
                label="End Date"
                type="month"
                value={experience.endDate}
                onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                placeholder="Leave empty if current"
              />
            </div>
            <div className="mt-4">
              <Input
                label="Description"
                value={experience.description}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
                multiline
                rows={4}
              />
            </div>
          </div>
        ))}

        {experiences.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 mb-4">No work experience entries yet</p>
            <Button
              variant="primary"
              onClick={addExperience}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Experience</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;