import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Resume Builder</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build Your Career Story</span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Automatically</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Connect your achievements from internships, courses, hackathons, and projects. Generate dynamic, verified resumes with AI-powered summaries in minutes.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="lg" onClick={() => navigate('/login')}>
            Start Building Free
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToFeatures}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;