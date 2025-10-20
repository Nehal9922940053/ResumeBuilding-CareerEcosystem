import React from 'react';
import { useResume } from '../../hooks/useResume';

const TemplateSelector = () => {
  const { currentTemplate, setCurrentTemplate } = useResume();

  const templates = [
    {
      id: 'professional',
      name: 'Professional',
      description: 'Clean and corporate design',
      color: 'bg-blue-500'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Modern and artistic layout',
      color: 'bg-purple-500'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple and focused design',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-bold mb-4">Choose Template</h3>
      <div className="space-y-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setCurrentTemplate(template.id)}
            className={`w-full text-left p-4 rounded-lg border-2 transition ${
              currentTemplate === template.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded ${template.color}`}></div>
              <div>
                <h4 className="font-semibold text-gray-900">{template.name}</h4>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;