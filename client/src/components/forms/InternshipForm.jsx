import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const InternshipForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const [internships, setInternships] = useState(resumeData.internships || []);

  const addInternship = () => {
    const newInternship = {
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    setInternships([...internships, newInternship]);
  };

  const updateInternship = (index, field, value) => {
    const updated = internships.map((intern, i) => 
      i === index ? { ...intern, [field]: value } : intern
    );
    setInternships(updated);
    updateResumeData('internships', updated);
  };

  const removeInternship = (index) => {
    const updated = internships.filter((_, i) => i !== index);
    setInternships(updated);
    updateResumeData('internships', updated);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Internships</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addInternship}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Internship</span>
        </Button>
      </div>

      <div className="space-y-6">
        {internships.map((internship, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Internship #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeInternship(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Position"
                value={internship.position}
                onChange={(e) => updateInternship(index, 'position', e.target.value)}
                placeholder="e.g., Software Development Intern"
              />
              <Input
                label="Company"
                value={internship.company}
                onChange={(e) => updateInternship(index, 'company', e.target.value)}
                placeholder="e.g., Microsoft"
              />
              <Input
                label="Start Date"
                type="month"
                value={internship.startDate}
                onChange={(e) => updateInternship(index, 'startDate', e.target.value)}
              />
              <Input
                label="End Date"
                type="month"
                value={internship.endDate}
                onChange={(e) => updateInternship(index, 'endDate', e.target.value)}
                placeholder="Leave empty if current"
              />
            </div>
            <div className="mt-4">
              <Input
                label="Description"
                value={internship.description}
                onChange={(e) => updateInternship(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and what you learned..."
                multiline
                rows={4}
              />
            </div>
          </div>
        ))}

        {internships.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 mb-4">No internship entries yet</p>
            <Button
              variant="primary"
              onClick={addInternship}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Internship</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipForm;