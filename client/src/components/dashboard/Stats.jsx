import React from 'react';
import { FileText, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: FileText,
      label: 'Total Resumes',
      value: '3',
      change: '+1 this month',
      color: 'blue'
    },
    {
      icon: CheckCircle,
      label: 'Completed Profiles',
      value: '85%',
      change: '+5% this week',
      color: 'green'
    },
    {
      icon: Clock,
      label: 'Last Updated',
      value: '2 days ago',
      change: 'On track',
      color: 'orange'
    },
    {
      icon: TrendingUp,
      label: 'Profile Strength',
      value: 'Excellent',
      change: 'All sections filled',
      color: 'purple'
    }
  ];

  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-full ${colors[stat.color]}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;