import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const WhyChoose = () => {
 const navigate = useNavigate();

  const whyChoose = [
    {
      title: "Real-Time Updates",
      description: "Your resume automatically updates as you add new achievements"
    },
    {
      title: "AI-Enhanced Content",
      description: "Professional summaries generated using advanced AI technology"
    },
    {
      title: "Multiple Templates",
      description: "Switch between professional designs instantly"
    },
    {
      title: "Fully Responsive",
      description: "Works seamlessly on desktop, tablet, and mobile devices"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">Why Choose CareerForge?</h3>
            <div className="space-y-6">
              {whyChoose.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-100 rounded-3xl p-12 text-center">
            <FileText className="w-32 h-32 text-blue-600 mx-auto mb-6" />
            <h4 className="text-3xl font-bold mb-4">Start Building Today</h4>
            <p className="text-gray-700 mb-6">Join thousands of students and professionals</p>
            <Button variant="primary" size="lg" className="w-full" onClick={() => navigate('/login')}>
              Create Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;