// import React from 'react';
// import { formatDate } from '../../../utils/helpers';

// const CreativeTemplate = ({ data }) => {
//   const { personalInfo, education, experience, skills, summary } = data;

//   return (
//     <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg">
//       {/* Header with background */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl mb-8">
//         <h1 className="text-4xl font-bold mb-2">
//           {personalInfo.name || 'Your Name'}
//         </h1>
//         <p className="text-blue-100 text-lg mb-4">
//           {personalInfo.title || 'Professional Title'}
//         </p>
//         <div className="flex flex-wrap gap-4 text-sm">
//           {personalInfo.email && (
//             <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               📧 {personalInfo.email}
//             </span>
//           )}
//           {personalInfo.phone && (
//             <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               📱 {personalInfo.phone}
//             </span>
//           )}
//           {personalInfo.location && (
//             <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               📍 {personalInfo.location}
//             </span>
//           )}
//         </div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2">
//           {/* Summary */}
//           {summary && (
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                 <div className="w-2 h-8 bg-purple-500 mr-3 rounded"></div>
//                 About Me
//               </h2>
//               <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
//             </div>
//           )}

//           {/* Experience */}
//           {experience && experience.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                 <div className="w-2 h-8 bg-blue-500 mr-3 rounded"></div>
//                 Experience
//               </h2>
//               <div className="space-y-6">
//                 {experience.map((exp, index) => (
//                   <div key={index} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
//                     <h3 className="font-bold text-gray-900 text-lg">{exp.position}</h3>
//                     <div className="flex justify-between text-gray-600 mb-2">
//                       <span className="font-semibold">{exp.company}</span>
//                       <span className="text-sm">
//                         {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
//                       </span>
//                     </div>
//                     <p className="text-gray-700">{exp.description}</p>
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
//               <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                 <div className="w-2 h-8 bg-green-500 mr-3 rounded"></div>
//                 Skills
//               </h2>
//               <div className="space-y-3">
//                 {skills.map((skill, index) => (
//                   <div key={index} className="text-center">
//                     <div className="bg-white p-3 rounded-lg shadow-sm">
//                       <span className="font-semibold text-gray-900">{skill.name}</span>
//                       {skill.level && (
//                         <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//                           <div
//                             className="bg-green-500 h-2 rounded-full"
//                             style={{ width: `${skill.level}%` }}
//                           ></div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Education */}
//           {education && education.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
//                 <div className="w-2 h-8 bg-orange-500 mr-3 rounded"></div>
//                 Education
//               </h2>
//               <div className="space-y-4">
//                 {education.map((edu, index) => (
//                   <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
//                     <h3 className="font-bold text-gray-900">{edu.degree}</h3>
//                     <p className="text-gray-600 text-sm">{edu.institution}</p>
//                     <p className="text-gray-500 text-xs">
//                       {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
//                     </p>
//                     {edu.gpa && (
//                       <p className="text-orange-600 font-semibold text-sm mt-1">
//                         GPA: {edu.gpa}
//                       </p>
//                     )}
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

// export default CreativeTemplate;


import React from 'react';
import { formatDate } from '../../../utils/helpers';

const CreativeTemplate = ({ data }) => {
  const { personalInfo, education, experience, skills, projects, internships, courses, hackathons, summary } = data;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg">
      {/* Header with background */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <p className="text-blue-100 text-lg mb-4">
          {personalInfo?.title || 'Professional Title'}
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          {personalInfo?.email && (
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              📧 {personalInfo.email}
            </span>
          )}
          {personalInfo?.phone && (
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              📱 {personalInfo.phone}
            </span>
          )}
          {personalInfo?.location && (
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              📍 {personalInfo.location}
            </span>
          )}
          {personalInfo?.website && (
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              🌐 {personalInfo.website}
            </span>
          )}
          {personalInfo?.github && (
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              💻 {personalInfo.github}
            </span>
          )}
          {personalInfo?.linkedin && (
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              🔗 {personalInfo.linkedin}
            </span>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Summary */}
          {summary && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-purple-500 mr-3 rounded"></div>
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap break-words">{summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience && experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-blue-500 mr-3 rounded"></div>
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
                    <h3 className="font-bold text-gray-900 text-lg">{exp.position}</h3>
                    <div className="flex justify-between text-gray-600 mb-2">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-sm">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-indigo-500 mr-3 rounded"></div>
                Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{project.technologies}</p>
                    <p className="text-gray-700 text-sm">{project.description}</p>
                    <div className="flex gap-4 mt-2">
                      {project.githubUrl && (
                        <span className="text-xs text-blue-600">GitHub: {project.githubUrl}</span>
                      )}
                      {project.liveUrl && (
                        <span className="text-xs text-green-600">Live: {project.liveUrl}</span>
                      )}
                    </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-green-500 mr-3 rounded"></div>
                Skills
              </h2>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      {skill.level && (
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-orange-500 mr-3 rounded"></div>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                    <p className="text-gray-500 text-xs">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                    {edu.gpa && (
                      <p className="text-orange-600 font-semibold text-sm mt-1">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internships */}
          {internships && internships.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-8 bg-pink-500 mr-3 rounded"></div>
                Internships
              </h2>
              <div className="space-y-3">
                {internships.map((intern, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 text-sm">{intern.position}</h4>
                    <p className="text-gray-600 text-xs">{intern.company}</p>
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

export default CreativeTemplate;