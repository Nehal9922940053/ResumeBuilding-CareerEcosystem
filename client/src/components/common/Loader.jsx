
// ============================================
// Loader.jsx
// ============================================
import React from 'react';
import { FileText, Loader2 } from 'lucide-react';

// Spinner Loader
export const Spinner = ({ size = 'md', color = 'blue' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colors = {
    blue: 'border-blue-600',
    purple: 'border-purple-600',
    green: 'border-green-600',
    red: 'border-red-600',
    gray: 'border-gray-600',
  };

  return (
    <div
      className={`${sizes[size]} border-4 ${colors[color]} border-t-transparent rounded-full animate-spin`}
    ></div>
  );
};

// Dots Loader
export const DotsLoader = ({ color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    gray: 'bg-gray-600',
  };

  return (
    <div className="flex space-x-2">
      <div className={`w-3 h-3 ${colors[color]} rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
      <div className={`w-3 h-3 ${colors[color]} rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
      <div className={`w-3 h-3 ${colors[color]} rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
    </div>
  );
};

// Pulse Loader
export const PulseLoader = ({ size = 'md', color = 'blue' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const colors = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    gray: 'bg-gray-600',
  };

  return (
    <div className={`${sizes[size]} ${colors[color]} rounded-full animate-pulse`}></div>
  );
};

// Full Page Loader
export const FullPageLoader = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-95">
      <FileText className="w-16 h-16 text-blue-600 mb-4 animate-pulse" />
      <div className="flex items-center space-x-3 mb-2">
        <Spinner size="lg" color="blue" />
        <h2 className="text-2xl font-bold text-gray-900">{message}</h2>
      </div>
      <p className="text-gray-600">Please wait while we process your request</p>
    </div>
  );
};

// Inline Loader
export const InlineLoader = ({ message, color = 'blue' }) => {
  return (
    <div className="flex items-center space-x-3">
      <Spinner size="sm" color={color} />
      {message && <span className="text-gray-700">{message}</span>}
    </div>
  );
};

// Card Skeleton Loader
export const SkeletonCard = () => {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
    </div>
  );
};

// List Skeleton Loader
export const SkeletonList = ({ count = 3 }) => {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Progress Loader
export const ProgressLoader = ({ progress = 0, message }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{message}</span>
        <span className="text-sm font-bold text-blue-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Button Loader
export const ButtonLoader = () => {
  return (
    <div className="flex items-center space-x-2">
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>Loading...</span>
    </div>
  );
};

// Default Loader Export
const Loader = ({ 
  type = 'spinner', 
  size = 'md', 
  color = 'blue',
  message,
  fullPage = false,
}) => {
  if (fullPage) {
    return <FullPageLoader message={message} />;
  }

  switch (type) {
    case 'dots':
      return <DotsLoader color={color} />;
    case 'pulse':
      return <PulseLoader size={size} color={color} />;
    case 'inline':
      return <InlineLoader message={message} color={color} />;
    case 'spinner':
    default:
      return <Spinner size={size} color={color} />;
  }
};

export default Loader;

