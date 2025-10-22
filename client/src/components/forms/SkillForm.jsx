import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const SkillForm = () => {
  const { resumeData, updateResumeData } = useResume();
const skills = resumeData.skills || [];

  const addSkill = () => {
    const newSkill = {
      name: '',
      category: '',
      level: ''
    };
   const updatedSkills = [...skills, newSkill];
    updateResumeData('skills', updatedSkills);
  };

  const updateSkill = (index, field, value) => {
    const updated = skills.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    );
    // setSkills(updated);
    updateResumeData('skills', updated);
  };

  const removeSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    // setSkills(updated);
    updateResumeData('skills', updated);
  };

  const skillCategories = [
    'Programming Languages',
    'Frameworks & Libraries',
    'Tools & Technologies',
    'Databases',
    'Cloud Platforms',
    'Soft Skills',
    'Languages'
  ];

  const proficiencyLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Skills</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addSkill}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Skill</span>
        </Button>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Skill #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSkill(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="Skill Name"
                value={skill.name}
                onChange={(e) => updateSkill(index, 'name', e.target.value)}
                placeholder="e.g., JavaScript, React, Project Management"
              />
              
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  value={skill.category}
                  onChange={(e) => updateSkill(index, 'category', e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Select Category</option>
                  {skillCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Proficiency</label>
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(index, 'level', e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Select Level</option>
                  {proficiencyLevels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        {skills.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 mb-4">No skills added yet</p>
            <Button
              variant="primary"
              onClick={addSkill}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Skill</span>
            </Button>
          </div>
        )}
      </div>

      {/* Skills by Category Preview */}
      {skills.length > 0 && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">Skills Preview</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map(category => {
              const categorySkills = skills.filter(skill => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category}>
                  <h5 className="font-medium text-gray-700 mb-2">{category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {skill.name}
                        {skill.level && (
                          <span className="text-xs text-gray-500 ml-1">
                            ({skill.level})
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillForm;