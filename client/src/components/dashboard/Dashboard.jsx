// import React, {useState, useEffect} from 'react';
// import { FileText, Sparkles, Download, Share2 } from 'lucide-react';
// import Sidebar from './Sidebar';
// import Stats from './Stats';
// import Button from '../common/Button';
// import { useAuth } from '../../context/AuthContext';

// const Dashboard = () => {
//  const { user } = useAuth();
//   const [recentResumes, setRecentResumes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch recent resumes from API
//     const fetchRecentResumes = async () => {
//       try {
//         // Add your API call here
//         setRecentResumes([
//           { id: 1, name: 'Software Engineer Resume', lastModified: '2024-01-15', template: 'Professional' },
//           { id: 2, name: 'Frontend Developer', lastModified: '2024-01-10', template: 'Creative' },
//         ]);
//       } catch (error) {
//         console.error('Error fetching resumes:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecentResumes();
//   }, []);
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//               <p className="text-gray-600">Manage your resumes and track your progress</p>
//             </div>

//             <Stats />

//             <div className="grid lg:grid-cols-2 gap-8 mt-8">
//               {/* Quick Actions */}
//               <div className="bg-white rounded-2xl shadow-sm p-6">
//                 <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <Button variant="primary" size="lg" className="flex items-center justify-center space-x-2">
//                     <FileText className="w-5 h-5" />
//                     <span>New Resume</span>
//                   </Button>
//                   <Button variant="secondary" size="lg" className="flex items-center justify-center space-x-2">
//                     <Sparkles className="w-5 h-5" />
//                     <span>AI Enhance</span>
//                   </Button>
//                   <Button variant="secondary" size="lg" className="flex items-center justify-center space-x-2">
//                     <Download className="w-5 h-5" />
//                     <span>Export</span>
//                   </Button>
//                   <Button variant="secondary" size="lg" className="flex items-center justify-center space-x-2">
//                     <Share2 className="w-5 h-5" />
//                     <span>Share</span>
//                   </Button>
//                 </div>
//               </div>

//               {/* Recent Resumes */}
//               <div className="bg-white rounded-2xl shadow-sm p-6">
//                 <h3 className="text-xl font-bold mb-6">Recent Resumes</h3>
//                 <div className="space-y-4">
//                    {loading ? (
//                     <p>Loading...</p>
//                   ) : (
//                     recentResumes.map((resume) => (
//                     <div key={resume.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition">
//                       <div>
//                         <h4 className="font-semibold text-gray-900">{resume.name}</h4>
//                         <p className="text-sm text-gray-600">
//                           Modified: {new Date(resume.lastModified).toLocaleDateString()} • {resume.template}
//                         </p>
//                       </div>
//                       <Button variant="ghost" size="sm">
//                         Edit
//                       </Button>
//                     </div>
//                    ))
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import { FileText, Sparkles, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { useAuth } from '../../context/AuthContext';

// Get API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [recentResumes, setRecentResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [isNewResumeModalOpen, setIsNewResumeModalOpen] = useState(false);
  const [isAIEnhanceModalOpen, setIsAIEnhanceModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    // Fetch recent resumes from API
    const fetchRecentResumes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/api/resume`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          // Ensure we always have an array, even if the API returns different structure
          if (data.data && Array.isArray(data.data)) {
            setRecentResumes(data.data);
          } else if (Array.isArray(data)) {
            setRecentResumes(data);
          } else if (data.resumes && Array.isArray(data.resumes)) {
            setRecentResumes(data.resumes);
          } else {
            // If no valid array found, use fallback data
            setRecentResumes(getFallbackResumes());
          }
        } else {
          // If API fails, use fallback data
          setRecentResumes(getFallbackResumes());
        }
      } catch (error) {
        console.error('Error fetching resumes:', error);
        // Use fallback data on error
        setRecentResumes(getFallbackResumes());
      } finally {
        setLoading(false);
      }
    };

    // Fallback data function
    const getFallbackResumes = () => {
      return [
        { 
          id: 1, 
          name: 'Software Engineer Resume', 
          lastModified: '2024-01-15', 
          template: 'Professional' 
        },
        { 
          id: 2, 
          name: 'Frontend Developer', 
          lastModified: '2024-01-10', 
          template: 'Creative' 
        },
      ];
    };

    fetchRecentResumes();
  }, []);

  // Safe mapping function that ensures we always work with an array
  const renderResumeList = (resumes) => {
    if (!resumes || !Array.isArray(resumes)) {
      return <p className="text-gray-500 text-center py-4">No resumes available</p>;
    }
    
    if (resumes.length === 0) {
      return <p className="text-gray-500 text-center py-4">No resumes yet. Create your first resume!</p>;
    }

    return resumes.map((resume) => (
      <div key={resume.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition">
        <div>
          <h4 className="font-semibold text-gray-900">{resume.name || 'Untitled Resume'}</h4>
          <p className="text-sm text-gray-600">
            Modified: {resume.lastModified ? new Date(resume.lastModified).toLocaleDateString() : 'Unknown'} • {resume.template || 'Default'}
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => handleEditResume(resume.id)}
        >
          Edit
        </Button>
      </div>
    ));
  };

  // Safe mapping for modals
  const renderModalResumeList = (resumes, actionHandler) => {
    if (!resumes || !Array.isArray(resumes) || resumes.length === 0) {
      return <p className="text-gray-500 text-center py-4">No resumes available</p>;
    }

    return resumes.map((resume) => (
      <div key={resume.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
        <div>
          <h4 className="font-semibold">{resume.name || 'Untitled Resume'}</h4>
          <p className="text-sm text-gray-600">{resume.template || 'Default'} Template</p>
        </div>
        <Button 
          size="sm" 
          onClick={() => actionHandler(resume.id)}
        >
          {actionHandler === handleEnhanceResume ? 'Enhance' : 
           actionHandler === handleGenerateShareLink ? 'Generate Link' : 'Export'}
        </Button>
      </div>
    ));
  };

  // New Resume Handler
  const handleNewResume = () => {
    navigate('/resume-builder');
  };

  // AI Enhance Handler
  const handleAIEnhance = () => {
    setIsAIEnhanceModalOpen(true);
  };

  const handleEnhanceResume = async (resumeId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/ai/generate-summary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ resumeId })
      });

      if (response.ok) {
        const data = await response.json();
        alert('Resume enhanced successfully with AI!');
        setIsAIEnhanceModalOpen(false);
      } else {
        throw new Error('Failed to enhance resume');
      }
    } catch (error) {
      console.error('Error enhancing resume:', error);
      alert('Error enhancing resume. Please try again.');
    }
  };

  // Export Handler
  const handleExport = () => {
    setIsExportModalOpen(true);
  };

  const handleExportResume = async (format, resumeId) => {
    try {
      const token = localStorage.getItem('token');
      let url, options;

      if (format === 'pdf') {
        url = `${API_BASE_URL}/api/resume/export/pdf/${resumeId}`;
        options = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        // For PDF, we'll download the file
        const response = await fetch(url, options);
        if (response.ok) {
          const blob = await response.blob();
          const downloadUrl = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = `resume-${resumeId}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(downloadUrl);
          alert('PDF exported successfully!');
        }
      } else if (format === 'docx') {
        // Similar implementation for DOCX
        url = `${API_BASE_URL}/api/resume/export/docx/${resumeId}`;
        options = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
        
        const response = await fetch(url, options);
        if (response.ok) {
          const blob = await response.blob();
          const downloadUrl = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = downloadUrl;
          a.download = `resume-${resumeId}.docx`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(downloadUrl);
          alert('DOCX exported successfully!');
        }
      }

      setIsExportModalOpen(false);
    } catch (error) {
      console.error('Error exporting resume:', error);
      alert('Error exporting resume. Please try again.');
    }
  };

  // Share Handler
  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleGenerateShareLink = async (resumeId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/resume/share`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ resumeId })
      });

      if (response.ok) {
        const data = await response.json();
        const shareUrl = data.shareUrl;
        
        // Copy to clipboard
        await navigator.clipboard.writeText(shareUrl);
        alert('Share link copied to clipboard!');
        setIsShareModalOpen(false);
      } else {
        throw new Error('Failed to generate share link');
      }
    } catch (error) {
      console.error('Error generating share link:', error);
      alert('Error generating share link. Please try again.');
    }
  };

  const handleEditResume = (resumeId) => {
    navigate(`/resume-builder?resume=${resumeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Manage your resumes and track your progress</p>
            </div>

            <Stats />

            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="flex items-center justify-center space-x-2"
                    onClick={handleNewResume}
                  >
                    <FileText className="w-5 h-5" />
                    <span>New Resume</span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex items-center justify-center space-x-2"
                    onClick={handleAIEnhance}
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>AI Enhance</span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex items-center justify-center space-x-2"
                    onClick={handleExport}
                  >
                    <Download className="w-5 h-5" />
                    <span>Export</span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="flex items-center justify-center space-x-2"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </Button>
                </div>
              </div>

              {/* Recent Resumes */}
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-bold mb-6">Recent Resumes</h3>
                <div className="space-y-4">
                  {loading ? (
                    <div className="text-center py-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                      <p className="mt-2 text-gray-600">Loading resumes...</p>
                    </div>
                  ) : (
                    renderResumeList(recentResumes)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Enhance Modal */}
      <Modal
        isOpen={isAIEnhanceModalOpen}
        onClose={() => setIsAIEnhanceModalOpen(false)}
        title="AI Resume Enhancement"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Select a resume to enhance with AI. Our AI will improve your resume content, optimize keywords, and suggest better phrasing.
          </p>
          
          <div className="space-y-3">
            {renderModalResumeList(recentResumes, handleEnhanceResume)}
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              variant="secondary" 
              onClick={() => setIsAIEnhanceModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Export Modal */}
      <Modal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        title="Export Resume"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Choose a format to export your resume.
          </p>
          
          <div className="space-y-3">
            {recentResumes && Array.isArray(recentResumes) && recentResumes.map((resume) => (
              <div key={resume.id} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{resume.name || 'Untitled Resume'}</h4>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    onClick={() => handleExportResume('pdf', resume.id)}
                    className="flex items-center space-x-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>PDF</span>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => handleExportResume('docx', resume.id)}
                    className="flex items-center space-x-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>DOCX</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              variant="secondary" 
              onClick={() => setIsExportModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Share Modal */}
      <Modal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title="Share Resume"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Generate a shareable link for your resume. Anyone with the link can view your resume.
          </p>
          
          <div className="space-y-3">
            {renderModalResumeList(recentResumes, handleGenerateShareLink)}
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              variant="secondary" 
              onClick={() => setIsShareModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;