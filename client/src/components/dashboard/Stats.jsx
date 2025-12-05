// import React from 'react';
// import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';

// const Stats = () => {
//   const stats = [
//     {
//       icon: FileText,
//       label: 'Total Resumes',
//       value: '3',
//       change: '+1 this month',
//       color: 'blue'
//     },
//     {
//       icon: CheckCircle,
//       label: 'Completed Profiles',
//       value: '85%',
//       change: '+5% this week',
//       color: 'green'
//     },
//     {
//       icon: Clock,
//       label: 'Last Updated',
//       value: '2 days ago',
//       change: 'On track',
//       color: 'orange'
//     },
//     {
//       icon: TrendingUp,
//       label: 'Profile Strength',
//       value: 'Excellent',
//       change: 'All sections filled',
//       color: 'purple'
//     }
//   ];

//   const colors = {
//     blue: 'bg-blue-100 text-blue-600',
//     green: 'bg-green-100 text-green-600',
//     orange: 'bg-orange-100 text-orange-600',
//     purple: 'bg-purple-100 text-purple-600'
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {stats.map((stat, index) => {
//         const Icon = stat.icon;
//         return (
//           <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                 <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
//                 <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
//               </div>
//               <div className={`p-3 rounded-full ${colors[stat.color]}`}>
//                 <Icon className="w-6 h-6" />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Stats;

import React from 'react';
import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const Stats = ({ stats }) => {
  const { totalResumes, completedProfiles, lastUpdated, profileStrength } = stats;

  const statsData = [
    {
      icon: FileText,
      label: 'Total Resumes',
      value: totalResumes.toString(),
      change: '+1 this month',
      color: 'blue'
    },
    {
      icon: CheckCircle,
      label: 'Completed Profiles',
      value: `${completedProfiles}%`,
      change: '+5% this week',
      color: 'green'
    },
    {
      icon: Clock,
      label: 'Last Updated',
      value: lastUpdated ? formatLastUpdated(lastUpdated) : 'Never',
      change: 'On track',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      label: 'Profile Strength',
      value: profileStrength,
      change: getProfileStrengthMessage(profileStrength),
      color: 'purple'
    }
  ];

  function formatLastUpdated(date) {
    const now = new Date();
    const diffTime = Math.abs(now - new Date(date));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  }

  function getProfileStrengthMessage(strength) {
    switch (strength) {
      case 'Excellent': return 'All sections filled';
      case 'Good': return 'Most sections filled';
      case 'Average': return 'Some sections missing';
      default: return 'Start building';
    }
  }

  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl lg:rounded-2xl shadow-sm p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-600 truncate">{stat.label}</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1 truncate">{stat.value}</p>
                <p className="text-xs lg:text-sm text-gray-500 mt-1 truncate">{stat.change}</p>
              </div>
              <div className={`p-2 lg:p-3 rounded-full ${colors[stat.color]} flex-shrink-0 ml-3`}>
                <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Default props for fallback
Stats.defaultProps = {
  stats: {
    totalResumes: 0,
    completedProfiles: 0,
    lastUpdated: null,
    profileStrength: 'Beginner'
  }
};

export default Stats;