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

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Sparkles, ArrowRight, Play, Star, Users, Award } from 'lucide-react';
// import  Button  from '../common/Button';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const scrollToFeatures = () => {
//     const featuresSection = document.getElementById('features');
//     if (featuresSection) {
//       featuresSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating Orbs */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl floating"></div>
//         <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl floating-delayed"></div>
//         <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl floating"></div>
        
//         {/* Grid Pattern */}
//         <div 
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`,
//             backgroundSize: '50px 50px',
//           }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center">
//           {/* Badge */}
//           <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 border border-white/20 group hover:border-white/30 transition-all duration-300">
//             <div className="relative">
//               <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
//               <div className="absolute inset-0 bg-purple-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
//             </div>
//             <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//               AI-Powered Resume Builder
//             </span>
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//           </div>

//           {/* Main Heading */}
//           <div className="space-y-6 mb-8">
//             <h1 className="text-6xl md:text-8xl font-black leading-tight">
//               <span className="block gradient-text animate-gradient">
//                 Build Your
//               </span>
//               <span className="block text-white text-shadow">
//                 Career Story
//               </span>
//               <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
//                 Automatically
//               </span>
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
//             Connect your achievements from internships, courses, hackathons, and projects. 
//             Generate <span className="text-purple-400 font-semibold">dynamic, verified resumes</span> with 
//             AI-powered summaries in minutes.
//           </p>

//           {/* Stats */}
//           <div className="flex flex-wrap justify-center gap-8 mb-12">
//             <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-white/10">
//               <Users className="w-5 h-5 text-cyan-400" />
//               <span className="text-sm font-medium">50K+ Users</span>
//             </div>
//             <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-white/10">
//               <Star className="w-5 h-5 text-yellow-400" />
//               <span className="text-sm font-medium">4.9/5 Rating</span>
//             </div>
//             <div className="flex items-center space-x-2 glass rounded-full px-4 py-2 border border-white/10">
//               <Award className="w-5 h-5 text-purple-400" />
//               <span className="text-sm font-medium">AI-Powered</span>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
//             <Button 
//               onClick={() => navigate('/login')}
//               size="lg"
//               className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 glow-hover"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span>Start Building Free</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </Button>
            
//             <Button 
//               onClick={scrollToFeatures}
//               variant="outline"
//               size="lg"
//               className="glass border-white/20 hover:border-white/30 text-white hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 group"
//             >
//               <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
//               Watch Demo
//             </Button>
//           </div>

//           {/* Floating Cards Preview */}
//           <div className="relative max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
//               {/* Resume Preview Card */}
//               <div className="glass-card interactive border border-white/10 group">
//                 <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg mb-4 flex items-center justify-center">
//                   <div className="text-4xl">📄</div>
//                 </div>
//                 <h3 className="font-semibold mb-2">Professional Templates</h3>
//                 <p className="text-sm text-gray-400">Choose from stunning designs</p>
//               </div>

//               {/* AI Feature Card */}
//               <div className="glass-card interactive border border-white/10 group md:translate-y-8">
//                 <div className="w-full h-32 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
//                   <div className="text-4xl">🤖</div>
//                 </div>
//                 <h3 className="font-semibold mb-2">AI-Powered Content</h3>
//                 <p className="text-sm text-gray-400">Smart summaries & optimization</p>
//               </div>

//               {/* Integration Card */}
//               <div className="glass-card interactive border border-white/10 group">
//                 <div className="w-full h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
//                   <div className="text-4xl">🔗</div>
//                 </div>
//                 <h3 className="font-semibold mb-2">Smart Integrations</h3>
//                 <p className="text-sm text-gray-400">GitHub, LinkedIn & more</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;