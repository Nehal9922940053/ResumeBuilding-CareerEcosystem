import React from 'react';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

const ResumePreview = ({ data, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'professional':
        return <ProfessionalTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      default:
        return <ProfessionalTemplate data={data} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Preview</h3>
        <div className="text-sm text-gray-500">
          Template: <span className="font-medium capitalize">{template}</span>
        </div>
      </div>
      
      <div className="border-2 border-gray-200 rounded-lg p-8 min-h-[800px]">
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;