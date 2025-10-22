// import React, { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import {
//   User,
//   Lock,
//   Bell,
//   Palette,
//   Globe,
//   Shield,
//   Eye,
//   EyeOff,
//   Save,
//   Trash2
// } from 'lucide-react';

// const Setting = () => {
//   const { user, updatePassword } = useAuth();
//   const [activeTab, setActiveTab] = useState('account');
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   const tabs = [
//     { id: 'account', label: 'Account', icon: User },
//     { id: 'security', label: 'Security', icon: Lock },
//     { id: 'notifications', label: 'Notifications', icon: Bell },
//     { id: 'appearance', label: 'Appearance', icon: Palette },
//     { id: 'privacy', label: 'Privacy', icon: Shield },
//   ];

//   const handlePasswordChange = async (e) => {
//     e.preventDefault();
//     setMessage({ type: '', text: '' });

//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       setMessage({ type: 'error', text: 'New passwords do not match' });
//       return;
//     }

//     if (passwordData.newPassword.length < 6) {
//       setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
//       return;
//     }

//     setLoading(true);
//     try {
//       await updatePassword(passwordData.currentPassword, passwordData.newPassword);
//       setMessage({ type: 'success', text: 'Password updated successfully' });
//       setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
//     } catch (error) {
//       setMessage({ type: 'error', text: error.message || 'Failed to update password' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
//           <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Sidebar Tabs */}
//           <div className="lg:w-64">
//             <div className="bg-white rounded-lg shadow-sm p-2">
//               {tabs.map((tab) => {
//                 const Icon = tab.icon;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
//                       activeTab === tab.id
//                         ? 'bg-blue-50 text-blue-600'
//                         : 'text-gray-700 hover:bg-gray-50'
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span className="font-medium">{tab.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="flex-1">
//             <div className="bg-white rounded-lg shadow-sm p-6">
//               {/* Account Settings */}
//               {activeTab === 'account' && (
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         defaultValue={user?.name}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         defaultValue={user?.email}
//                         disabled
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
//                       />
//                       <p className="text-sm text-gray-500 mt-1">Email cannot be changed</p>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         placeholder="+1 (555) 000-0000"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <button className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//                       <Save className="w-4 h-4" />
//                       <span>Save Changes</span>
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Security Settings */}
//               {activeTab === 'security' && (
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                  
//                   {message.text && (
//                     <div className={`mb-6 p-4 rounded-lg ${
//                       message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
//                     }`}>
//                       {message.text}
//                     </div>
//                   )}

//                   <form onSubmit={handlePasswordChange} className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Current Password
//                       </label>
//                       <div className="relative">
//                         <input
//                           type={showCurrentPassword ? 'text' : 'password'}
//                           value={passwordData.currentPassword}
//                           onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowCurrentPassword(!showCurrentPassword)}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                         >
//                           {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                         </button>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         New Password
//                       </label>
//                       <div className="relative">
//                         <input
//                           type={showNewPassword ? 'text' : 'password'}
//                           value={passwordData.newPassword}
//                           onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowNewPassword(!showNewPassword)}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                         >
//                           {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                         </button>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Confirm New Password
//                       </label>
//                       <input
//                         type="password"
//                         value={passwordData.confirmPassword}
//                         onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
//                     >
//                       <Lock className="w-4 h-4" />
//                       <span>{loading ? 'Updating...' : 'Update Password'}</span>
//                     </button>
//                   </form>

//                   <div className="mt-8 pt-8 border-t border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
//                     <p className="text-gray-600 mb-4">Add an extra layer of security to your account</p>
//                     <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
//                       Enable 2FA
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Notifications Settings */}
//               {activeTab === 'notifications' && (
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
//                   <div className="space-y-6">
//                     {[
//                       { label: 'Email Notifications', description: 'Receive email updates about your account' },
//                       { label: 'Resume Updates', description: 'Get notified when your resume is viewed' },
//                       { label: 'Weekly Digest', description: 'Receive weekly summary of your activity' },
//                       { label: 'Marketing Emails', description: 'Receive tips and product updates' },
//                     ].map((item, index) => (
//                       <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900">{item.label}</h3>
//                           <p className="text-sm text-gray-600">{item.description}</p>
//                         </div>
//                         <label className="relative inline-flex items-center cursor-pointer">
//                           <input type="checkbox" className="sr-only peer" defaultChecked />
//                           <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Appearance Settings */}
//               {activeTab === 'appearance' && (
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900 mb-6">Appearance</h2>
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-3">Theme</label>
//                       <div className="grid grid-cols-3 gap-4">
//                         {['Light', 'Dark', 'Auto'].map((theme) => (
//                           <button
//                             key={theme}
//                             className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition"
//                           >
//                             <div className={`w-full h-20 rounded mb-2 ${
//                               theme === 'Light' ? 'bg-white' : theme === 'Dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-white to-gray-900'
//                             }`}></div>
//                             <span className="text-sm font-medium">{theme}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-3">Font Size</label>
//                       <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                         <option>Small</option>
//                         <option selected>Medium</option>
//                         <option>Large</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Privacy Settings */}
//               {activeTab === 'privacy' && (
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-900 mb-6">Privacy & Data</h2>
//                   <div className="space-y-6">
//                     <div className="p-4 border border-gray-200 rounded-lg">
//                       <h3 className="font-medium text-gray-900 mb-2">Profile Visibility</h3>
//                       <p className="text-sm text-gray-600 mb-3">Control who can see your profile</p>
//                       <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                         <option>Public</option>
//                         <option selected>Private</option>
//                         <option>Friends Only</option>
//                       </select>
//                     </div>

//                     <div className="p-4 border border-gray-200 rounded-lg">
//                       <h3 className="font-medium text-gray-900 mb-2">Data Export</h3>
//                       <p className="text-sm text-gray-600 mb-3">Download a copy of your data</p>
//                       <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
//                         Export Data
//                       </button>
//                     </div>

//                     <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
//                       <h3 className="font-medium text-red-900 mb-2">Delete Account</h3>
//                       <p className="text-sm text-red-700 mb-3">Permanently delete your account and all data</p>
//                       <button className="flex items-center space-x-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
//                         <Trash2 className="w-4 h-4" />
//                         <span>Delete Account</span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Setting;
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Globe, 
  Shield,
  Eye,
  EyeOff,
  Save,
  Trash2
} from 'lucide-react';

const Setting = () => {
  const { user, updatePassword, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // Account information state
  const [accountData, setAccountData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Add this useEffect to update accountData when user changes
  useEffect(() => {
    if (user) {
      setAccountData({
        fullName: user.fullName || '',
        email: user.email || '',
        phone: user.phone || ''
      });
    }
  }, [user]); // This will run whenever the user object changes

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ];

  // Handle account information update
  const handleAccountUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await updateProfile({
        fullName: accountData.fullName,
        phone: accountData.phone
      });
      setMessage({ type: 'success', text: 'Account information updated successfully' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to update account information' });
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setMessage({ type: 'error', text: 'Password must be at least 6 characters' });
      return;
    }

    setLoading(true);
    try {
      await updatePassword(passwordData.currentPassword, passwordData.newPassword);
      setMessage({ type: 'success', text: 'Password updated successfully' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Failed to update password' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Account Settings */}
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
                  
                  {message.text && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {message.text}
                    </div>
                  )}

                  <form onSubmit={handleAccountUpdate}>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={accountData.fullName}
                          onChange={(e) => setAccountData({ ...accountData, fullName: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  bg-gray-50"
                          placeholder="Enter your full name"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={accountData.email}
                          disabled
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                        />
                        <p className="text-sm text-gray-500 mt-1">Email cannot be changed</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={accountData.phone}
                          onChange={(e) => setAccountData({ ...accountData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className=" bg-gray-50 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          disabled
                        />
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                  
                  {message.text && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {message.text}
                    </div>
                  )}

                  <form onSubmit={handlePasswordChange} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? 'text' : 'password'}
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                        <input
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                      <Lock className="w-4 h-4" />
                      <span>{loading ? 'Updating...' : 'Update Password'}</span>
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-600 mb-4">Add an extra layer of security to your account</p>
                    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;