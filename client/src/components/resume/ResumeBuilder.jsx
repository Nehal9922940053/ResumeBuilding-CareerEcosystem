// import React from 'react';
// import { useResume } from '../../hooks/useResume';
// import ResumePreview from './ResumePreview';
// import TemplateSelector from './TemplateSelector';
// import Button from '../common/Button';
// import { Download, Sparkles } from 'lucide-react';

// const ResumeBuilder = () => {
//   const { resumeData, currentTemplate } = useResume();

//   const handleExport = () => {
//     // Export logic would go here
//     console.log('Exporting resume...');
//   };

//   const handleAIEnhance = () => {
//     // AI enhancement logic would go here
//     console.log('Enhancing with AI...');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
//             <p className="text-gray-600">Create and customize your professional resume</p>
//           </div>
//           <div className="flex space-x-4">
//             <Button
//               variant="secondary"
//               size="lg"
//               onClick={handleAIEnhance}
//               className="flex items-center space-x-2"
//             >
//               <Sparkles className="w-5 h-5" />
//               <span>AI Enhance</span>
//             </Button>
//             <Button
//               variant="primary"
//               size="lg"
//               onClick={handleExport}
//               className="flex items-center space-x-2"
//             >
//               <Download className="w-5 h-5" />
//               <span>Export PDF</span>
//             </Button>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-4 gap-8">
//           <div className="lg:col-span-1 space-y-6">
//             <TemplateSelector />
//             {/* Form sections would go here */}
//             <div className="bg-white rounded-2xl shadow-sm p-6">
//               <h3 className="text-lg font-bold mb-4">Resume Sections</h3>
//               <div className="space-y-3">
//                 {['Personal Info', 'Education', 'Experience', 'Skills', 'Projects', 'Internships', 'Courses', 'Hackathons'].map((section) => (
//                   <button
//                     key={section}
//                     className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition"
//                   >
//                     {section}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div className="lg:col-span-3">
//             <ResumePreview data={resumeData} template={currentTemplate} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;



import React, { useState } from 'react';
import { useResume } from '../../hooks/useResume';
import ResumePreview from './ResumePreview';
import TemplateSelector from './TemplateSelector';
import Button from '../common/Button';
import { Download, Sparkles } from 'lucide-react';

// Import all your form components
import EducationForm from '../forms/EducationForm';
import ExperienceForm from '../forms/ExperienceForm';
import InternshipForm from '../forms/InternshipForm';
import CourseForm from '../forms/CourseForm';
import HackathonForm from '../forms/HackathonForm';
import ProjectForm from '../forms/ProjectForm';
import SkillForm from '../forms/SkillForm';
import PersonalInfoForm from '../forms/PersonalInfoForm.jsx'; // You'll need to create this

const ResumeBuilder = () => {
  const { resumeData, currentTemplate } = useResume();
  const [activeSection, setActiveSection] = useState('personal');

  const handleExport = () => {
    // Export logic would go here
    console.log('Exporting resume...');
  };

  const handleAIEnhance = () => {
    // AI enhancement logic would go here
    console.log('Enhancing with AI...');
  };

  // Render the active form component based on current section
  const renderActiveForm = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm />;
      case 'education':
        return <EducationForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'skills':
        return <SkillForm />;
      case 'projects':
        return <ProjectForm />;
      case 'internships':
        return <InternshipForm />;
      case 'courses':
        return <CourseForm />;
      case 'hackathons':
        return <HackathonForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  const sections = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'internships', label: 'Internships' },
    { id: 'courses', label: 'Courses' },
    { id: 'hackathons', label: 'Hackathons' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Builder</h1>
            <p className="text-gray-600">Create and customize your professional resume</p>
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleAIEnhance}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>AI Enhance</span>
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleExport}
              className="flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Export PDF</span>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Forms */}
          <div className="lg:col-span-1 space-y-6">
            <TemplateSelector />
            
            {/* Navigation Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">Resume Sections</h3>
              <div className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                      activeSection === section.id 
                        ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium' 
                        : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Active Form Section */}
              <div className="bg-white rounded-2xl shadow-sm">
                {renderActiveForm()}
              </div>
              
              {/* Resume Preview */}
              <ResumePreview data={resumeData} template={currentTemplate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;