import React from 'react';

const HowItWorks = () => {
  const howItWorks = [
    {
      step: 1,
      color: "bg-blue-500",
      title: "Sign Up & Connect",
      description: "Create your account with email or Google. Connect your GitHub for automatic project import."
    },
    {
      step: 2,
      color: "bg-purple-500",
      title: "Add Your Achievements",
      description: "Fill in your education, experience, skills, courses, internships, and hackathons."
    },
    {
      step: 3,
      color: "bg-pink-500",
      title: "Generate & Download",
      description: "Let AI create your professional summary. Choose a template and download your resume."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">How It Works</h3>
          <p className="text-xl text-gray-600">Get your professional resume ready in 3 simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <div key={index} className="text-center">
              <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg`}>
                {item.step}
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;