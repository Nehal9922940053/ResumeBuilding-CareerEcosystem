import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const HackathonForm = () => {
  const { resumeData, updateResumeData } = useResume();
const hackathons = resumeData.hackathons || [];

  const addHackathon = () => {
    const newHackathon = {
      name: '',
      date: '',
      role: '',
      description: '',
      achievements: '',
      projectUrl: ''
    };
     const updatedHackathons = [...hackathons, newHackathon];
    updateResumeData('hackathons', updatedHackathons);
  };

  const updateHackathon = (index, field, value) => {
    const updated = hackathons.map((hackathon, i) => 
      i === index ? { ...hackathon, [field]: value } : hackathon
    );
    updateResumeData('hackathons', updated);
  };

  const removeHackathon = (index) => {
    const updated = hackathons.filter((_, i) => i !== index);
    updateResumeData('hackathons', updated);
  };


  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Hackathons & Competitions</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addHackathon}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Hackathon</span>
        </Button>
      </div>

      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Hackathon #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeHackathon(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Hackathon Name"
                value={hackathon.name}
                onChange={(e) => updateHackathon(index, 'name', e.target.value)}
                placeholder="e.g., Hack the North 2024"
              />
              <Input
                label="Date"
                type="month"
                value={hackathon.date}
                onChange={(e) => updateHackathon(index, 'date', e.target.value)}
              />
              <Input
                label="Your Role"
                value={hackathon.role}
                onChange={(e) => updateHackathon(index, 'role', e.target.value)}
                placeholder="e.g., Frontend Developer, Team Lead"
              />
              <Input
                label="Project URL"
                value={hackathon.projectUrl}
                onChange={(e) => updateHackathon(index, 'projectUrl', e.target.value)}
                placeholder="Link to your project"
              />
            </div>
            <div className="mt-4">
              <Input
                label="Description"
                value={hackathon.description}
                onChange={(e) => updateHackathon(index, 'description', e.target.value)}
                placeholder="Describe the project and your contributions..."
                multiline
                rows={3}
              />
            </div>
            <div className="mt-4">
              <Input
                label="Achievements & Awards"
                value={hackathon.achievements}
                onChange={(e) => updateHackathon(index, 'achievements', e.target.value)}
                placeholder="Any prizes, recognition, or special achievements..."
                multiline
                rows={2}
              />
            </div>
          </div>
        ))}

        {hackathons.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 mb-4">No hackathon entries yet</p>
            <Button
              variant="primary"
              onClick={addHackathon}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Hackathon</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonForm;