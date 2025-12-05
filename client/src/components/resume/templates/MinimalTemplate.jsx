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
    <div className="font-sans text-gray-800 max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[38px] font-semibold text-gray-900 tracking-tight">
          {personalInfo?.fullName || 'Your Name'}
        </h1>

        <p className="text-gray-600 text-lg mt-1">
          {personalInfo?.title || 'Software Developer'}
        </p>

        <div className="text-gray-600 text-sm mt-4 space-y-1 leading-relaxed">
          {personalInfo?.email && <div>{personalInfo.email}</div>}
          {personalInfo?.phone && <div>{personalInfo.phone}</div>}
          {personalInfo?.location && <div>{personalInfo.location}</div>}
          
          {/* Links Section */}
          <div className="mt-2 flex flex-col items-center space-y-1">
            {personalInfo?.website && (
              <a href={personalInfo.website} className="text-blue-600 underline break-all">
                {personalInfo.website}
              </a>
            )}
            {personalInfo?.github && (
              <a href={personalInfo.github} className="text-blue-600 underline break-all">
                {personalInfo.github}
              </a>
            )}
            {personalInfo?.linkedin && (
              <a href={personalInfo.linkedin} className="text-blue-600 underline break-all">
                {personalInfo.linkedin}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-10 text-center">
          <p className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-wrap break-words max-w-2xl mx-auto">
            {summary}
          </p>
        </div>
      )}

      <div className="space-y-10">
        {/* Experience */}
        {experience?.length > 0 && (
          <section>
            <h2 className="section-heading">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-1">{exp.company}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <section>
            <h2 className="section-heading">Education</h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                    </span>
                  </div>

                  <p className="text-gray-600">{edu.institution}</p>

                  {edu.gpa && (
                    <p className="text-gray-700 text-sm">GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <section>
            <h2 className="section-heading">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section>
            <h2 className="section-heading">Projects</h2>
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;
