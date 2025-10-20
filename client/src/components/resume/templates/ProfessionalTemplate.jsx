import React from 'react';
import { formatDate } from '../../../utils/helpers';

const ProfessionalTemplate = ({ data }) => {
  const { personalInfo, education, experience, skills, projects, summary } = data;

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.name || 'Your Name'}
        </h1>
        <div className="flex justify-center space-x-4 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
        {personalInfo.linkedin && (
          <div className="mt-2">
            <span className="text-blue-600 text-sm">
              LinkedIn: {personalInfo.linkedin}
            </span>
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Experience */}
          {experience && experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{exp.company}</span>
                      <span>
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{edu.institution}</span>
                      <span>
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                    {edu.gpa && (
                      <p className="text-gray-700 text-sm">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-blue-50 px-3 py-2 rounded">
                    <span className="text-sm font-medium text-blue-800">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-xs text-blue-600 ml-2">
                        ({skill.level})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Projects
              </h2>
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {project.name}
                    </h3>
                    <p className="text-gray-700 text-xs">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate;