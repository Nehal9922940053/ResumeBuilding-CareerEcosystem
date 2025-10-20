import React from 'react';
import { FileText, Sparkles, Github, GraduationCap, Briefcase, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="w-12 h-12 text-blue-500" />,
      title: "AI-Powered Summaries",
      description: "Generate compelling professional summaries automatically using OpenAI GPT"
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-500" />,
      title: "Multiple Templates",
      description: "Choose from professional, creative, and minimal resume designs"
    },
    {
      icon: <Github className="w-12 h-12 text-pink-500" />,
      title: "GitHub Integration",
      description: "Auto-import your projects directly from GitHub repositories"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-green-500" />,
      title: "Education & Courses",
      description: "Track your academic achievements and online certifications"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-orange-500" />,
      title: "Internships & Experience",
      description: "Document your professional journey and internship experiences"
    },
    {
      icon: <Award className="w-12 h-12 text-red-500" />,
      title: "Hackathons & Achievements",
      description: "Showcase your competitive programming wins and achievements"
    }
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">Everything You Need</h3>
          <p className="text-xl text-gray-600">A complete ecosystem for building and managing your professional resume</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;