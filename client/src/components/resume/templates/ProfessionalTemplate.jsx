// import React from 'react';
// import { formatDate } from '../../../utils/helpers';

// const ProfessionalTemplate = ({ data }) => {
//   const { personalInfo, education, experience, skills, projects, summary } = data;

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header */}
//       <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//         {personalInfo?.name || 'Your Name'}
//         </h1>
//         <div className="flex justify-center space-x-4 text-sm text-gray-600">
//           {personalInfo.email && <span>{personalInfo.email}</span>}
//           {personalInfo.phone && <span>• {personalInfo.phone}</span>}
//           {personalInfo.location && <span>• {personalInfo.location}</span>}
//         </div>
//         {personalInfo.linkedin && (
//           <div className="mt-2">
//             <span className="text-blue-600 text-sm">
//               LinkedIn: {personalInfo.linkedin}
//             </span>
//           </div>
//         )}
//       </div>

//       {/* Summary */}
//       {summary && (
//         <div className="mb-6">
//           <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//             Professional Summary
//           </h2>
//           <p className="text-gray-700 leading-relaxed">{summary}</p>
//         </div>
//       )}

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           {/* Experience */}
//           {experience && experience.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Work Experience
//               </h2>
//               <div className="space-y-4">
//                 {experience.map((exp, index) => (
//                   <div key={index} className="border-l-4 border-blue-600 pl-4">
//                     <h3 className="font-semibold text-gray-900">{exp.position}</h3>
//                     <div className="flex justify-between text-sm text-gray-600 mb-1">
//                       <span>{exp.company}</span>
//                       <span>
//                         {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
//                       </span>
//                     </div>
//                     <p className="text-gray-700 text-sm">{exp.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Education */}
//           {education && education.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Education
//               </h2>
//               <div className="space-y-4">
//                 {education.map((edu, index) => (
//                   <div key={index} className="border-l-4 border-green-600 pl-4">
//                     <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
//                     <div className="flex justify-between text-sm text-gray-600 mb-1">
//                       <span>{edu.institution}</span>
//                       <span>
//                         {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
//                       </span>
//                     </div>
//                     {edu.gpa && (
//                       <p className="text-gray-700 text-sm">GPA: {edu.gpa}</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div>
//           {/* Skills */}
//           {skills && skills.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Skills
//               </h2>
//               <div className="space-y-2">
//                 {skills.map((skill, index) => (
//                   <div key={index} className="bg-blue-50 px-3 py-2 rounded">
//                     <span className="text-sm font-medium text-blue-800">
//                       {skill.name}
//                     </span>
//                     {skill.level && (
//                       <span className="text-xs text-blue-600 ml-2">
//                         ({skill.level})
//                       </span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Projects */}
//           {projects && projects.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Projects
//               </h2>
//               <div className="space-y-3">
//                 {projects.map((project, index) => (
//                   <div key={index}>
//                     <h3 className="font-semibold text-gray-900 text-sm">
//                       {project.name}
//                     </h3>
//                     <p className="text-gray-700 text-xs">{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalTemplate;


// import React from 'react';
// import { formatDate } from '../../../utils/helpers';

// const ProfessionalTemplate = ({ data }) => {
//   const { personalInfo, education, experience, skills, projects, internships, summary } = data;

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header */}
//       <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           {personalInfo?.fullName || 'Your Name'}
//         </h1>
//         <p className="text-gray-600 text-lg mb-3">
//           {personalInfo?.title || 'Professional Title'}
//         </p>
//         <div className="flex justify-center space-x-4 text-sm text-gray-600 flex-wrap">
//           {personalInfo?.email && <span>{personalInfo.email}</span>}
//           {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
//           {personalInfo?.location && <span>• {personalInfo.location}</span>}
//           {personalInfo?.website && <span>• {personalInfo.website}</span>}
//           {personalInfo?.github && <span>• {personalInfo.github}</span>}
//           {personalInfo?.linkedin && <span>• LinkedIn: {personalInfo.linkedin}</span>}
//         </div>
//       </div>

//       {/* Summary */}
//       {summary && (
//         <div className="mb-6">
//           <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//             Professional Summary
//           </h2>
//           <p className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">{summary}</p>
//         </div>
//       )}

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           {/* Experience */}
//           {experience && experience.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Work Experience
//               </h2>
//               <div className="space-y-4">
//                 {experience.map((exp, index) => (
//                   <div key={index} className="border-l-4 border-blue-600 pl-4">
//                     <h3 className="font-semibold text-gray-900">{exp.position}</h3>
//                     <div className="flex justify-between text-sm text-gray-600 mb-1">
//                       <span>{exp.company}</span>
//                       <span>
//                         {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
//                       </span>
//                     </div>
//                     <p className="text-gray-700 text-sm whitespace-pre-wrap break-words">{exp.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Education */}
//           {education && education.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Education
//               </h2>
//               <div className="space-y-4">
//                 {education.map((edu, index) => (
//                   <div key={index} className="border-l-4 border-green-600 pl-4">
//                     <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
//                     <div className="flex justify-between text-sm text-gray-600 mb-1">
//                       <span>{edu.institution}</span>
//                       <span>
//                         {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
//                       </span>
//                     </div>
//                     {edu.gpa && (
//                       <p className="text-gray-700 text-sm">GPA: {edu.gpa}</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Projects */}
//           {projects && projects.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Projects
//               </h2>
//               <div className="space-y-3">
//                 {projects.map((project, index) => (
//                   <div key={index}>
//                     <h3 className="font-semibold text-gray-900 text-sm">
//                       {project.name}
//                     </h3>
//                     <p className="text-gray-700 text-xs">{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

        
//         <div>
//           {/* Skills */}
//           {skills && skills.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Skills
//               </h2>
//               <div className="space-y-2">
//                 {skills.map((skill, index) => (
//                   <div key={index} className="bg-blue-50 px-3 py-2 rounded">
//                     <span className="text-sm font-medium text-blue-800">
//                       {skill.name}
//                     </span>
//                     {skill.level && (
//                       <span className="text-xs text-blue-600 ml-2">
//                         ({skill.level})
//                       </span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Internships */}
//           {internships && internships.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
//                 Internships
//               </h2>
//               <div className="space-y-2">
//                 {internships.map((intern, index) => (
//                   <div key={index}>
//                     <h4 className="font-semibold text-gray-900 text-sm">
//                       {intern.position}
//                     </h4>
//                     <p className="text-gray-700 text-xs">{intern.company}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalTemplate;








import React from 'react';
import { formatDate } from '../../../utils/helpers';

const ProfessionalTemplate = ({ data }) => {
  const { 
    personalInfo, 
    education, 
    experience, 
    skills, 
    projects, 
    internships, 
    courses,
    hackathons,
    summary 
  } = data;

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <p className="text-gray-600 text-lg mb-3">
          {personalInfo?.title || 'Professional Title'}
        </p>
        <div className="flex justify-center space-x-4 text-sm text-gray-600 flex-wrap">
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo?.location && <span>• {personalInfo.location}</span>}
          {personalInfo?.website && <span>• {personalInfo.website}</span>}
          {personalInfo?.github && <span>• {personalInfo.github}</span>}
          {personalInfo?.linkedin && <span>• LinkedIn: {personalInfo.linkedin}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap break-words">{summary}</p>
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
                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm whitespace-pre-wrap break-words">{exp.description}</p>
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
                        {formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}
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

          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>
                        {project.startDate && `${formatDate(project.startDate)} - ${project.endDate ? formatDate(project.endDate) : 'Present'}`}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2 whitespace-pre-wrap break-words">{project.description}</p>
                    {project.technologies && (
                      <p className="text-gray-600 text-xs">
                        <strong>Technologies:</strong> {project.technologies}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hackathons */}
          {hackathons && hackathons.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Hackathons & Competitions
              </h2>
              <div className="space-y-4">
                {hackathons.map((hackathon, index) => (
                  <div key={index} className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900">{hackathon.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{hackathon.role}</span>
                      <span>{hackathon.date && formatDate(hackathon.date)}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-2 whitespace-pre-wrap break-words">{hackathon.description}</p>
                    {hackathon.achievements && (
                      <p className="text-gray-600 text-xs">
                        <strong>Achievements:</strong> {hackathon.achievements}
                      </p>
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

          {/* Internships */}
          {internships && internships.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Internships
              </h2>
              <div className="space-y-4">
                {internships.map((intern, index) => (
                  <div key={index} className="border-l-4 border-teal-600 pl-4">
                    <h4 className="font-semibold text-gray-900 text-sm">{intern.position}</h4>
                    <p className="text-gray-700 text-xs mb-1">{intern.company}</p>
                    <div className="text-xs text-gray-600">
                      {formatDate(intern.startDate)} - {intern.endDate ? formatDate(intern.endDate) : 'Present'}
                    </div>
                    <p className="text-gray-700 text-xs mt-1 whitespace-pre-wrap break-words">{intern.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Courses & Certifications */}
          {courses && courses.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
                Courses & Certifications
              </h2>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div key={index} className="bg-green-50 px-3 py-2 rounded">
                    <h4 className="text-sm font-medium text-green-800">{course.name}</h4>
                    <p className="text-xs text-green-700">{course.provider}</p>
                    {course.completionDate && (
                      <p className="text-xs text-green-600">
                        Completed: {formatDate(course.completionDate)}
                      </p>
                    )}
                    {course.skills && (
                      <p className="text-xs text-green-600 mt-1">
                        <strong>Skills:</strong> {course.skills}
                      </p>
                    )}
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