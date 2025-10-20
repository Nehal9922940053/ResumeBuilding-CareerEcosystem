// import React, { createContext, useContext, useState } from 'react';

// const ResumeContext = createContext();

// export const useResume = () => {
//   const context = useContext(ResumeContext);
//   if (!context) {
//     throw new Error('useResume must be used within a ResumeProvider');
//   }
//   return context;
// };


import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

// Export the context
export { ResumeContext };

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};


export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    education: [],
    experience: [],
    skills: [],
    projects: [],
    internships: [],
    courses: [],
    hackathons: [],
    summary:''
  });

    const [currentTemplate, setCurrentTemplate] = useState('professional');

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const value = {
    resumeData,
    updateResumeData,
    currentTemplate,       // Add this
    setCurrentTemplate     // Add this
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};