// import React from 'react';
// import { formatDate } from '../../../utils/helpers';

// const MinimalTemplate = ({ data }) => {
//   const { personalInfo, education, experience, skills, summary } = data;

//   return (
//     <div className="font-sans text-gray-800 max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
//           {personalInfo.name || 'Your Name'}
//         </h1>
//         <div className="text-gray-600 space-y-1">
//           {personalInfo.email && <div>{personalInfo.email}</div>}
//           {personalInfo.phone && <div>{personalInfo.phone}</div>}
//           {personalInfo.location && <div>{personalInfo.location}</div>}
//         </div>
//       </div>

//       {/* Summary */}
//       {summary && (
//         <div className="mb-8 text-center">
//           <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
//             {summary}
//           </p>
//         </div>
//       )}

//       <div className="space-y-8">
//         {/* Experience */}
//         {experience && experience.length > 0 && (
//           <div>
//             <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
//               Experience
//             </h2>
//             <div className="space-y-6">
//               {experience.map((exp, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between items-start mb-1">
//                     <h3 className="font-semibold text-gray-900">{exp.position}</h3>
//                     <span className="text-sm text-gray-600 whitespace-nowrap">
//                       {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-gray-600 mb-2">
//                     <span>{exp.company}</span>
//                   </div>
//                   <p className="text-gray-700 text-sm">{exp.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Education */}
//         {education && education.length > 0 && (
//           <div>
//             <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
//               Education
//             </h2>
//             <div className="space-y-4">
//               {education.map((edu, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between items-start mb-1">
//                     <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
//                     <span className="text-sm text-gray-600 whitespace-nowrap">
//                       {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
//                     </span>
//                   </div>
//                   <p className="text-gray-600">{edu.institution}</p>
//                   {edu.gpa && (
//                     <p className="text-gray-700 text-sm">GPA: {edu.gpa}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Skills */}
//         {skills && skills.length > 0 && (
//           <div>
//             <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
//               Skills
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
//                 >
//                   {skill.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MinimalTemplate;


import React from 'react';
import { formatDate } from '../../../utils/helpers';

const MinimalTemplate = ({ data }) => {
  const { personalInfo, education, experience, skills, projects, summary } = data;

  return (
    <div className="font-sans text-gray-800 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2 tracking-tight">
          {personalInfo?.fullName || 'Your Name'}
        </h1>
        <p className="text-gray-600 text-lg mb-2">
          {personalInfo?.title || 'Professional Title'}
        </p>
        <div className="text-gray-600 space-y-1 text-sm">
          {personalInfo?.email && <div>{personalInfo.email}</div>}
          {personalInfo?.phone && <div>{personalInfo.phone}</div>}
          {personalInfo?.location && <div>{personalInfo.location}</div>}
          {personalInfo?.website && <div>{personalInfo.website}</div>}
          {personalInfo?.github && <div>{personalInfo.github}</div>}
          {personalInfo?.linkedin && <div>{personalInfo.linkedin}</div>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-center whitespace-pre-wrap break-words">
            {summary}
          </p>
        </div>
      )}

      <div className="space-y-8">
        {/* Experience */}
        {experience && experience.length > 0 && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-600">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-gray-700 text-sm">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
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
  );
};

export default MinimalTemplate;