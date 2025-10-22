import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const EducationForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const educations = resumeData.education || [];

  const addEducation = () => {
    const newEducation = {
      degree: '',
      institution: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: ''
    };
    const updated = [...educations, newEducation];
    updateResumeData('education', updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = educations.map((edu, i) => 
      i === index ? { ...edu, [field]: value } : edu
    );
    updateResumeData('education', updated);
  };

  const removeEducation = (index) => {
    const updated = educations.filter((_, i) => i !== index);
    updateResumeData('education', updated);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Education</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addEducation}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Education</span>
        </Button>
      </div>

      <div className="space-y-6">
        {educations.map((education, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Education #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeEducation(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Degree"
                value={education.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                placeholder="e.g., Bachelor of Science in Computer Science"
              />
              <Input
                label="Institution"
                value={education.institution}
                onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                placeholder="e.g., University of Technology"
              />
              <Input
                label="Start Date"
                type="month"
                value={education.startDate}
                onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
              />
              <Input
                label="End Date"
                type="month"
                value={education.endDate}
                onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                placeholder="Leave empty if current"
              />
              <Input
                label="GPA"
                value={education.gpa}
                onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                placeholder="e.g., 3.8/4.0"
              />
            </div>
            <div className="mt-4">
              <Input
                label="Description"
                value={education.description}
                onChange={(e) => updateEducation(index, 'description', e.target.value)}
                placeholder="Brief description of your studies, achievements, or relevant coursework"
                multiline
                rows={3}
              />
            </div>
          </div>
        ))}

        {educations.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 mb-4">No education entries yet</p>
            <Button
              variant="primary"
              onClick={addEducation}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Education</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationForm;