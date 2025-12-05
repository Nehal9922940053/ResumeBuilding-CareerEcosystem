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
import React, { useState, useRef } from 'react';
import { useResume } from '../../hooks/useResume';
import ResumePreview from './ResumePreview';
import TemplateSelector from './TemplateSelector';
import Button from '../common/Button';
import { Download, Sparkles } from 'lucide-react';
// Remove: import html2pdf from 'html2pdf.js';
// Add:
import html2PDF from 'jspdf-html2canvas-pro';

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
  const [isExporting, setIsExporting] = useState(false);
  const resumeContentRef = useRef();

  const handleExport = async () => {
    try {
      console.log('Exporting resume as PDF...');
      const element = resumeContentRef.current;
      if (!element) {
        console.error('Resume preview element not found');
        return;
      }

      setIsExporting(true);

      // Clone element to avoid modifying the original
      const elementClone = element.cloneNode(true);
      document.body.appendChild(elementClone);
      elementClone.style.position = 'absolute';
      elementClone.style.top = '-9999px';
      elementClone.style.left = '-9999px';
      elementClone.style.width = `${element.scrollWidth}px`;
      elementClone.style.height = `${element.scrollHeight}px`;
      elementClone.style.backgroundColor = '#ffffff'; // Ensure white background

      // PDF options adapted for jspdf-html2canvas-pro
      const opt = {
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true 
        },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          foreignObjectRendering: false,
          ignoreElements: (el) => el.tagName === 'SCRIPT' || el.classList.contains('no-print'),
          width: element.scrollWidth, // Match element width for precise capture
          height: element.scrollHeight,
        },
        imageType: 'image/jpeg',
        imageQuality: 0.98,
        margin: [10, 10, 10, 10],
        filename: `resume-${resumeData.personalInfo?.name?.replace(/\s+/g, '-').toLowerCase() || 'my-resume'}.pdf`,
      };

      const pdf = await html2PDF(elementClone, opt);
      pdf.save(opt.filename);
      console.log('✅ PDF exported successfully!');
    } catch (err) {
      console.error('Error exporting PDF:', err);
      // Fallback: Open browser print dialog
      if (confirm('PDF export failed. Open print dialog to save as PDF?')) {
        window.print();
      }
    } finally {
      setIsExporting(false);
      // Cleanup: Remove the clone
      const clone = document.body.querySelector(`[style*="top: -9999px"]`);
      if (clone) {
        document.body.removeChild(clone);
      }
    }
  };

  const handleAIEnhance = () => {
    console.log('Enhancing with AI...');
    // AI enhancement logic would go here
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
              disabled={isExporting}
              className="flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>{isExporting ? 'Generating PDF...' : 'Export PDF'}</span>
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
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 capitalize">{activeSection.replace('_', ' ')}</h3>
                {renderActiveForm()}
              </div>
              
            
              {/* <div className="bg-white rounded-2xl shadow-sm p-6 print:hidden">
                <h3 className="text-lg font-semibold mb-4 print:hidden">Preview</h3>
                <div className="border border-gray-200 rounded-lg p-4 print:border-none print:p-0"> */}
              <div>
                     <ResumePreview ref={resumeContentRef}  data={resumeData} template={currentTemplate} />
              </div>
             
                {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;