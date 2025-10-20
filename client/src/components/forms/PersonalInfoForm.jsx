import React from 'react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const PersonalInfoForm = () => {
  const { resumeData, updateResumeData } = useResume();

  const updateField = (field, value) => {
    updateResumeData(field, value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          value={resumeData.fullName || ''}
          onChange={(e) => updateField('fullName', e.target.value)}
          placeholder="e.g., John Doe"
        />
        <Input
          label="Professional Title"
          value={resumeData.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
          placeholder="e.g., Software Engineer"
        />
        <Input
          label="Email"
          type="email"
          value={resumeData.email || ''}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="e.g., john.doe@email.com"
        />
        <Input
          label="Phone"
          value={resumeData.phone || ''}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="e.g., +1 (555) 123-4567"
        />
        <Input
          label="Location"
          value={resumeData.location || ''}
          onChange={(e) => updateField('location', e.target.value)}
          placeholder="e.g., San Francisco, CA"
        />
        <Input
          label="Portfolio Website"
          value={resumeData.website || ''}
          onChange={(e) => updateField('website', e.target.value)}
          placeholder="e.g., https://johndoe.com"
        />
        <Input
          label="LinkedIn"
          value={resumeData.linkedin || ''}
          onChange={(e) => updateField('linkedin', e.target.value)}
          placeholder="e.g., https://linkedin.com/in/johndoe"
        />
        <Input
          label="GitHub"
          value={resumeData.github || ''}
          onChange={(e) => updateField('github', e.target.value)}
          placeholder="e.g., https://github.com/johndoe"
        />
      </div>
      
      <div className="mt-4">
        <Input
          label="Professional Summary"
          value={resumeData.summary || ''}
          onChange={(e) => updateField('summary', e.target.value)}
          placeholder="Write a brief summary about your professional background and career objectives..."
          multiline
          rows={4}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;