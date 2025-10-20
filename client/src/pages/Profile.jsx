// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import Input from '../components/common/Input';
// import Button from '../components/common/Button';

// const Profile = () => {
//   const { user } = useAuth();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//     linkedin: '',
//     github: '',
//     portfolio: '',
//     otherLinks: ''
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   // Initialize form with user data
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name || '',
//         email: user.email || '',
//         phone: user.phone || '',
//         location: user.location || '',
//         linkedin: user.linkedin || '',
//         github: user.github || '',
//         portfolio: user.portfolio || '',
//         otherLinks: user.otherLinks || ''
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     try {
//       // Add your API call here to update profile
//       console.log('Updating profile:', formData);
//       // await updateProfileAPI(formData);
      
//       // Show success message
//       alert('Profile updated successfully!');
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Error updating profile. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto">
//         <form onSubmit={handleSubmit}>
//           <div className="bg-white rounded-2xl shadow-sm p-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
//             <p className="text-gray-600 mb-8">Manage your account information and preferences</p>
            
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Personal Information</h3>
//                 <div className="space-y-4">
//                   <Input
//                     label="Full Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                   />
//                   <Input
//                     label="Email Address"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                   />
//                   <Input
//                     label="Phone Number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                   />
//                   <Input
//                     label="Location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="Enter your city and country"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-xl font-bold mb-4">Professional Links</h3>
//                 <div className="space-y-4">
//                   <Input
//                     label="LinkedIn Profile"
//                     name="linkedin"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                     placeholder="https://linkedin.com/in/yourname"
//                   />
//                   <Input
//                     label="GitHub Profile"
//                     name="github"
//                     value={formData.github}
//                     onChange={handleChange}
//                     placeholder="https://github.com/yourusername"
//                   />
//                   <Input
//                     label="Portfolio Website"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     placeholder="https://yourportfolio.com"
//                   />
//                   <Input
//                     label="Other Links"
//                     name="otherLinks"
//                     value={formData.otherLinks}
//                     onChange={handleChange}
//                     placeholder="Any other relevant links"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-gray-200">
//               <Button
//                 type="submit"
//                 variant="primary"
//                 size="lg"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Saving...' : 'Save Changes'}
//               </Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// Profile.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useNavigate} from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Profile = () => {
   
  const { user, updateUser, loading: authLoading } = useAuth();
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
    bio: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Initialize form with user data
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || '',
        linkedin: user.linkedin || '',
        github: user.github || '',
        website: user.website || '',
        bio: user.bio || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear save message when user starts typing
    if (saveMessage) setSaveMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSaveMessage('');
    
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          location: formData.location,
          linkedin: formData.linkedin,
          github: formData.github,
          website: formData.website,
          bio: formData.bio
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      if (data.success) {
        // Update user in context
        updateUser(data.data);
        setSaveMessage('Profile updated successfully!');
         setTimeout(() => {
          navigate('/dashboard'); // Navigate to dashboard
        }, 1500);
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSaveMessage('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setSaveMessage('Error updating profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
            <p className="text-gray-600 mb-8">Manage your account information and preferences</p>
            
            {saveMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                saveMessage.includes('Error') 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {saveMessage}
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                  <Input
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Professional Links</h3>
                <div className="space-y-4">
                  <Input
                    label="LinkedIn Profile"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourname"
                  />
                  <Input
                    label="GitHub Profile"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/yourusername"
                  />
                  <Input
                    label="Portfolio Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourportfolio.com"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Tell us about yourself..."
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
              <p className="text-sm text-gray-500">
                * Email cannot be changed
              </p>
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                disabled={isLoading || authLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;