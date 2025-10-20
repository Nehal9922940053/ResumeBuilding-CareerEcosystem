import React from 'react';
import { FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-8 h-8" />
            <h1 className="text-2xl font-bold">CareerForge</h1>
          </div>
          <p className="text-gray-400 mb-4">Build your career story automatically</p>
          <p className="text-gray-500 text-sm">© 2025 CareerForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;