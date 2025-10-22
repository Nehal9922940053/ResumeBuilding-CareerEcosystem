import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../hooks/useResume';
import Input from '../common/Input';
import Button from '../common/Button';

const CourseForm = () => {
  const { resumeData, updateResumeData } = useResume();
const courses = resumeData.courses || [];

  const addCourse = () => {
    const newCourse = {
      name: '',
      provider: '',
      completionDate: '',
      certificateUrl: '',
      skills: ''
    };
      const updatedCourses = [...courses, newCourse];
    updateResumeData('courses', updatedCourses);
  };

  const updateCourse = (index, field, value) => {
    const updated = courses.map((course, i) => 
      i === index ? { ...course, [field]: value } : course
    );
    updateResumeData('courses', updated);
  };

  const removeCourse = (index) => {
    const updated = courses.filter((_, i) => i !== index);
    updateResumeData('courses', updated);
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Courses & Certifications</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={addCourse}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Course</span>
        </Button>
      </div>

      <div className="space-y-6">
        {courses.map((course, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900">Course #{index + 1}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeCourse(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Course Name"
                value={course.name}
                onChange={(e) => updateCourse(index, 'name', e.target.value)}
                placeholder="e.g., Machine Learning Specialization"
              />
              <Input
                label="Provider"
                value={course.provider}
                onChange={(e) => updateCourse(index, 'provider', e.target.value)}
                placeholder="e.g., Coursera, Udemy, University"
              />
              <Input
                label="Completion Date"
                type="month"
                value={course.completionDate}
                onChange={(e) => updateCourse(index, 'completionDate', e.target.value)}
              />
              <Input
                label="Certificate URL"
                value={course.certificateUrl}
                onChange={(e) => updateCourse(index, 'certificateUrl', e.target.value)}
                placeholder="Link to your certificate"
              />
            </div>
            <div className="mt-4">
              <Input
                label="Skills Learned"
                value={course.skills}
                onChange={(e) => updateCourse(index, 'skills', e.target.value)}
                placeholder="List key skills or technologies learned in this course"
                multiline
                rows={3}
              />
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 mb-4">No course entries yet</p>
            <Button
              variant="primary"
              onClick={addCourse}
              className="flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Your First Course</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseForm;