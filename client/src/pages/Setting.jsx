// import React, { useState, useEffect } from 'react';
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
//   Trash2,
//   Sun,
//   Moon,
//   Monitor,
//   Smartphone,
//   Laptop
// } from 'lucide-react';

// const Setting = () => {
//   const { user, updatePassword, updateProfile } = useAuth();
//   const [activeTab, setActiveTab] = useState('account');
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
  
//   // Account information state
//   const [accountData, setAccountData] = useState({
//     fullName: '',
//     email: '',
//     phone: ''
//   });
  
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });

//   // Notification settings state
//   const [notificationData, setNotificationData] = useState({
//     emailNotifications: true,
//     pushNotifications: false,
//     smsNotifications: false,
//     marketingEmails: false,
//     securityAlerts: true,
//     productUpdates: true
//   });

//   // Appearance settings state
//   const [appearanceData, setAppearanceData] = useState({
//     theme: 'light',
//     fontSize: 'medium',
//     density: 'comfortable',
//     fontFamily: 'system'
//   });

//   // Privacy settings state
//   const [privacyData, setPrivacyData] = useState({
//     profileVisibility: 'private',
//     dataSharing: false,
//     personalizedAds: false,
//     searchVisibility: true,
//     activityStatus: true
//   });
  
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState({ type: '', text: '' });

//   // Add this useEffect to update accountData when user changes
//   useEffect(() => {
//     if (user) {
//       setAccountData({
//         fullName: user.fullName || '',
//         email: user.email || '',
//         phone: user.phone || ''
//       });
//     }
//   }, [user]);

//   const tabs = [
//     { id: 'account', label: 'Account', icon: User },
//     { id: 'security', label: 'Security', icon: Lock },
//     { id: 'notifications', label: 'Notifications', icon: Bell },
//     { id: 'appearance', label: 'Appearance', icon: Palette },
//     { id: 'privacy', label: 'Privacy', icon: Shield },
//   ];

//   const themes = [
//     { id: 'light', label: 'Light', icon: Sun },
//     { id: 'dark', label: 'Dark', icon: Moon },
//     { id: 'system', label: 'System', icon: Monitor }
//   ];

//   const fontSizes = [
//     { id: 'small', label: 'Small' },
//     { id: 'medium', label: 'Medium' },
//     { id: 'large', label: 'Large' },
//     { id: 'xlarge', label: 'Extra Large' }
//   ];

//   const densities = [
//     { id: 'compact', label: 'Compact' },
//     { id: 'comfortable', label: 'Comfortable' },
//     { id: 'spacious', label: 'Spacious' }
//   ];

//   const fonts = [
//     { id: 'system', label: 'System Default' },
//     { id: 'inter', label: 'Inter' },
//     { id: 'roboto', label: 'Roboto' },
//     { id: 'georgia', label: 'Georgia' }
//   ];

//   const visibilityOptions = [
//     { id: 'public', label: 'Public' },
//     { id: 'private', label: 'Private' },
//     { id: 'contacts', label: 'Contacts Only' }
//   ];

//   // Handle account information update
//   const handleAccountUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ type: '', text: '' });

//     try {
//       await updateProfile({
//         fullName: accountData.fullName,
//         phone: accountData.phone
//       });
//       setMessage({ type: 'success', text: 'Account information updated successfully' });
//     } catch (error) {
//       setMessage({ type: 'error', text: error.message || 'Failed to update account information' });
//     } finally {
//       setLoading(false);
//     }
//   };

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

//   const handleNotificationChange = (key) => {
//     setNotificationData(prev => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   const handleAppearanceChange = (key, value) => {
//     setAppearanceData(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const handlePrivacyChange = (key, value) => {
//     setPrivacyData(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const handleSaveNotifications = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setMessage({ type: 'success', text: 'Notification preferences updated successfully' });
//       setLoading(false);
//     }, 1000);
//   };

//   const handleSaveAppearance = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setMessage({ type: 'success', text: 'Appearance settings updated successfully' });
//       setLoading(false);
//     }, 1000);
//   };

//   const handleSavePrivacy = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setMessage({ type: 'success', text: 'Privacy settings updated successfully' });
//       setLoading(false);
//     }, 1000);
//   };

//   const handleDeleteAccount = () => {
//     if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
//       setLoading(true);
//       // Handle account deletion logic here
//       setTimeout(() => {
//         setMessage({ type: 'success', text: 'Account deletion initiated. Check your email for confirmation.' });
//         setLoading(false);
//       }, 1500);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Settings</h1>
//           <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage your account settings and preferences</p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
//           {/* Sidebar Tabs */}
//           <div className="lg:w-64">
//             <div className="bg-white rounded-lg shadow-sm p-2">
//               {tabs.map((tab) => {
//                 const Icon = tab.icon;
//                 return (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base ${
//                       activeTab === tab.id
//                         ? 'bg-blue-50 text-blue-600'
//                         : 'text-gray-700 hover:bg-gray-50'
//                     }`}
//                   >
//                     <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                     <span className="font-medium">{tab.label}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="flex-1">
//             <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              
//               {/* Success/Error Message */}
//               {message.text && (
//                 <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
//                   message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
//                 }`}>
//                   {message.text}
//                 </div>
//               )}

//               {/* Account Settings */}
//               {activeTab === 'account' && (
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Account Information</h2>
                  
//                   <form onSubmit={handleAccountUpdate}>
//                     <div className="space-y-4 sm:space-y-6">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           value={accountData.fullName}
//                           onChange={(e) => setAccountData({ ...accountData, fullName: e.target.value })}
//                           className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm sm:text-base"
//                           placeholder="Enter your full name"
//                           disabled
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Email Address
//                         </label>
//                         <input
//                           type="email"
//                           value={accountData.email}
//                           disabled
//                           className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed text-sm sm:text-base"
//                         />
//                         <p className="text-xs sm:text-sm text-gray-500 mt-1">Email cannot be changed</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           value={accountData.phone}
//                           onChange={(e) => setAccountData({ ...accountData, phone: e.target.value })}
//                           placeholder="+1 (555) 000-0000"
//                           className="bg-gray-50 w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                           disabled
//                         />
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               )}

//               {/* Security Settings */}
//               {activeTab === 'security' && (
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Security Settings</h2>
                  
//                   <form onSubmit={handlePasswordChange} className="space-y-4 sm:space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Current Password
//                       </label>
//                       <div className="relative">
//                         <input
//                           type={showCurrentPassword ? 'text' : 'password'}
//                           value={passwordData.currentPassword}
//                           onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
//                           className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm sm:text-base"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowCurrentPassword(!showCurrentPassword)}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                         >
//                           {showCurrentPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
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
//                           className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm sm:text-base"
//                           required
//                         />
//                         <button
//                           type="button"
//                           onClick={() => setShowNewPassword(!showNewPassword)}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                         >
//                           {showNewPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
//                         </button>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Confirm New Password
//                       </label>
//                         <input
//                           type="password"
//                           value={passwordData.confirmPassword}
//                           onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
//                           className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
//                           required
//                         />
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
//                     >
//                       <Lock className="w-4 h-4" />
//                       <span>{loading ? 'Updating...' : 'Update Password'}</span>
//                     </button>
//                   </form>

//                   <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
//                     <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Two-Factor Authentication</h3>
//                     <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Add an extra layer of security to your account</p>
//                     <button className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base">
//                       Enable 2FA
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Notifications Settings */}
//               {activeTab === 'notifications' && (
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Notification Preferences</h2>
                  
//                   <div className="space-y-4 sm:space-y-6">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Email Notifications</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Receive updates via email</p>
//                         </div>
//                         <button
//                           onClick={() => handleNotificationChange('emailNotifications')}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             notificationData.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               notificationData.emailNotifications ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Push Notifications</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Receive browser notifications</p>
//                         </div>
//                         <button
//                           onClick={() => handleNotificationChange('pushNotifications')}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             notificationData.pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               notificationData.pushNotifications ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">SMS Notifications</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Receive text messages</p>
//                         </div>
//                         <button
//                           onClick={() => handleNotificationChange('smsNotifications')}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             notificationData.smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               notificationData.smsNotifications ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Marketing Emails</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Promotional content</p>
//                         </div>
//                         <button
//                           onClick={() => handleNotificationChange('marketingEmails')}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             notificationData.marketingEmails ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               notificationData.marketingEmails ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Security Alerts</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Important security updates</p>
//                         </div>
//                         <button
//                           onClick={() => handleNotificationChange('securityAlerts')}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             notificationData.securityAlerts ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               notificationData.securityAlerts ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Product Updates</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">New features and improvements</p>
//                         </div>
//                         <button
//                           onClick={() => handleNotificationChange('productUpdates')}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             notificationData.productUpdates ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               notificationData.productUpdates ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>
//                     </div>

//                     <button
//                       onClick={handleSaveNotifications}
//                       disabled={loading}
//                       className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
//                     >
//                       <Save className="w-4 h-4" />
//                       <span>{loading ? 'Saving...' : 'Save Preferences'}</span>
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Appearance Settings */}
//               {activeTab === 'appearance' && (
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Appearance Settings</h2>
                  
//                   <div className="space-y-6 sm:space-y-8">
//                     {/* Theme Selection */}
//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Theme</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//                         {themes.map((theme) => {
//                           const Icon = theme.icon;
//                           return (
//                             <button
//                               key={theme.id}
//                               onClick={() => handleAppearanceChange('theme', theme.id)}
//                               className={`flex items-center space-x-3 p-3 sm:p-4 border rounded-lg transition text-left ${
//                                 appearanceData.theme === theme.id
//                                   ? 'border-blue-500 bg-blue-50'
//                                   : 'border-gray-200 hover:border-gray-300'
//                               }`}
//                             >
//                               <Icon className="w-5 h-5 text-gray-600" />
//                               <span className="font-medium text-sm sm:text-base">{theme.label}</span>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>

//                     {/* Font Size */}
//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Font Size</h3>
//                       <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                         {fontSizes.map((size) => (
//                           <button
//                             key={size.id}
//                             onClick={() => handleAppearanceChange('fontSize', size.id)}
//                             className={`p-3 border rounded-lg transition text-sm sm:text-base ${
//                               appearanceData.fontSize === size.id
//                                 ? 'border-blue-500 bg-blue-50 text-blue-700'
//                                 : 'border-gray-200 hover:border-gray-300'
//                             }`}
//                           >
//                             {size.label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Density */}
//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Density</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                         {densities.map((density) => (
//                           <button
//                             key={density.id}
//                             onClick={() => handleAppearanceChange('density', density.id)}
//                             className={`p-3 border rounded-lg transition text-sm sm:text-base ${
//                               appearanceData.density === density.id
//                                 ? 'border-blue-500 bg-blue-50 text-blue-700'
//                                 : 'border-gray-200 hover:border-gray-300'
//                             }`}
//                           >
//                             {density.label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Font Family */}
//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Font Family</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//                         {fonts.map((font) => (
//                           <button
//                             key={font.id}
//                             onClick={() => handleAppearanceChange('fontFamily', font.id)}
//                             className={`p-3 border rounded-lg transition text-sm sm:text-base ${
//                               appearanceData.fontFamily === font.id
//                                 ? 'border-blue-500 bg-blue-50 text-blue-700'
//                                 : 'border-gray-200 hover:border-gray-300'
//                             }`}
//                             style={font.id === 'georgia' ? { fontFamily: 'Georgia, serif' } :
//                                    font.id === 'roboto' ? { fontFamily: 'Roboto, sans-serif' } :
//                                    font.id === 'inter' ? { fontFamily: 'Inter, sans-serif' } : {}}
//                           >
//                             {font.label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     <button
//                       onClick={handleSaveAppearance}
//                       disabled={loading}
//                       className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
//                     >
//                       <Save className="w-4 h-4" />
//                       <span>{loading ? 'Saving...' : 'Save Appearance'}</span>
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Privacy Settings */}
//               {activeTab === 'privacy' && (
//                 <div>
//                   <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Privacy Settings</h2>
                  
//                   <div className="space-y-6 sm:space-y-8">
//                     {/* Profile Visibility */}
//                     <div>
//                       <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Profile Visibility</h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                         {visibilityOptions.map((option) => (
//                           <button
//                             key={option.id}
//                             onClick={() => handlePrivacyChange('profileVisibility', option.id)}
//                             className={`p-3 border rounded-lg transition text-sm sm:text-base ${
//                               privacyData.profileVisibility === option.id
//                                 ? 'border-blue-500 bg-blue-50 text-blue-700'
//                                 : 'border-gray-200 hover:border-gray-300'
//                             }`}
//                           >
//                             {option.label}
//                           </button>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Privacy Toggles */}
//                     <div className="space-y-4">
//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Data Sharing</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Allow anonymous usage data collection</p>
//                         </div>
//                         <button
//                           onClick={() => handlePrivacyChange('dataSharing', !privacyData.dataSharing)}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             privacyData.dataSharing ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               privacyData.dataSharing ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Personalized Ads</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Show relevant advertisements</p>
//                         </div>
//                         <button
//                           onClick={() => handlePrivacyChange('personalizedAds', !privacyData.personalizedAds)}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             privacyData.personalizedAds ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               privacyData.personalizedAds ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Search Visibility</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Allow search engines to index profile</p>
//                         </div>
//                         <button
//                           onClick={() => handlePrivacyChange('searchVisibility', !privacyData.searchVisibility)}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             privacyData.searchVisibility ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               privacyData.searchVisibility ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>

//                       <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                         <div>
//                           <h3 className="font-medium text-gray-900 text-sm sm:text-base">Activity Status</h3>
//                           <p className="text-gray-500 text-xs sm:text-sm">Show when you're active</p>
//                         </div>
//                         <button
//                           onClick={() => handlePrivacyChange('activityStatus', !privacyData.activityStatus)}
//                           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                             privacyData.activityStatus ? 'bg-blue-600' : 'bg-gray-300'
//                           }`}
//                         >
//                           <span
//                             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                               privacyData.activityStatus ? 'translate-x-6' : 'translate-x-1'
//                             }`}
//                           />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                       <button
//                         onClick={handleSavePrivacy}
//                         disabled={loading}
//                         className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base flex-1 justify-center"
//                       >
//                         <Save className="w-4 h-4" />
//                         <span>{loading ? 'Saving...' : 'Save Privacy Settings'}</span>
//                       </button>

//                       <button
//                         onClick={handleDeleteAccount}
//                         disabled={loading}
//                         className="flex items-center space-x-2 px-4 sm:px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition disabled:opacity-50 text-sm sm:text-base flex-1 justify-center"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                         <span>Delete Account</span>
//                       </button>
//                     </div>

//                     <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                       <h4 className="font-medium text-yellow-800 text-sm sm:text-base mb-2">Data Protection</h4>
//                       <p className="text-yellow-700 text-xs sm:text-sm">
//                         Your privacy is important to us. We never sell your personal data to third parties.
//                         Read our <a href="#" className="underline hover:no-underline">Privacy Policy</a> for more information.
//                       </p>
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
  Shield,
  Eye,
  EyeOff,
  Save,
  Trash2,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

const Setting = () => {
  const { user, updatePassword, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState('account');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
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

  // Notification settings state
  const [notificationData, setNotificationData] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    productUpdates: true
  });

  // Appearance settings state
  const [appearanceData, setAppearanceData] = useState({
    theme: 'light',
    fontSize: 'medium',
    density: 'comfortable',
    fontFamily: 'system'
  });

  // Privacy settings state
  const [privacyData, setPrivacyData] = useState({
    profileVisibility: 'private',
    dataSharing: false,
    personalizedAds: false,
    searchVisibility: true,
    activityStatus: true
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Load persisted settings from localStorage on mount
  useEffect(() => {
    const loadPersistedSettings = () => {
      const savedNotifications = localStorage.getItem('notificationData');
      if (savedNotifications) {
        setNotificationData(JSON.parse(savedNotifications));
      }
      
      const savedAppearance = localStorage.getItem('appearanceData');
      if (savedAppearance) {
        setAppearanceData(JSON.parse(savedAppearance));
      }
      
      const savedPrivacy = localStorage.getItem('privacyData');
      if (savedPrivacy) {
        setPrivacyData(JSON.parse(savedPrivacy));
      }
    };
    
    loadPersistedSettings();
  }, []);

  // Apply appearance settings dynamically
  useEffect(() => {
    // Font size
    const sizeMap = {
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.25rem'
    };
    document.documentElement.style.fontSize = sizeMap[appearanceData.fontSize] || '1rem';
    
    // Font family
    const fontMap = {
      system: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
      inter: '"Inter", sans-serif',
      roboto: '"Roboto", sans-serif',
      georgia: '"Georgia", serif'
    };
    document.documentElement.style.fontFamily = fontMap[appearanceData.fontFamily] || fontMap.system;
    
    // Density: Set CSS variables for spacing (use in Tailwind: p-xs -> var(--spacing-xs))
    const densityMap = {
      compact: { '--spacing-xs': '0.125rem', '--spacing-sm': '0.25rem', '--spacing-md': '0.375rem' },
      comfortable: { '--spacing-xs': '0.25rem', '--spacing-sm': '0.5rem', '--spacing-md': '0.75rem' },
      spacious: { '--spacing-xs': '0.375rem', '--spacing-sm': '0.75rem', '--spacing-md': '1rem' }
    };
    Object.entries(densityMap[appearanceData.density] || densityMap.comfortable).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    
    // Theme (requires @custom-variant in CSS for class strategy)
    const effectiveTheme = appearanceData.theme === 'system' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : appearanceData.theme;
    document.documentElement.classList.toggle('dark', effectiveTheme === 'dark');
  }, [appearanceData]);

  // Update accountData when user changes
  useEffect(() => {
    if (user) {
      setAccountData({
        fullName: user.fullName || '',
        email: user.email || '',
        phone: user.phone || ''
      });
    }
  }, [user]);

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ];

  const themes = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor }
  ];

  const fontSizes = [
    { id: 'small', label: 'Small' },
    { id: 'medium', label: 'Medium' },
    { id: 'large', label: 'Large' },
    { id: 'xlarge', label: 'Extra Large' }
  ];

  const densities = [
    { id: 'compact', label: 'Compact' },
    { id: 'comfortable', label: 'Comfortable' },
    { id: 'spacious', label: 'Spacious' }
  ];

  const fonts = [
    { id: 'system', label: 'System Default' },
    { id: 'inter', label: 'Inter' },
    { id: 'roboto', label: 'Roboto' },
    { id: 'georgia', label: 'Georgia' }
  ];

  const visibilityOptions = [
    { id: 'public', label: 'Public' },
    { id: 'private', label: 'Private' },
    { id: 'contacts', label: 'Contacts Only' }
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

  const handleNotificationChange = (key) => {
    setNotificationData(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleAppearanceChange = (key, value) => {
    setAppearanceData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setPrivacyData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveNotifications = () => {
    localStorage.setItem('notificationData', JSON.stringify(notificationData));
    setLoading(true);
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Notification preferences updated successfully' });
      setLoading(false);
    }, 1000);
  };

  const handleSaveAppearance = () => {
    localStorage.setItem('appearanceData', JSON.stringify(appearanceData));
    setLoading(true);
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Appearance settings updated successfully' });
      setLoading(false);
    }, 1000);
  };

  const handleSavePrivacy = () => {
    localStorage.setItem('privacyData', JSON.stringify(privacyData));
    setLoading(true);
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Privacy settings updated successfully' });
      setLoading(false);
    }, 1000);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setLoading(true);
      setTimeout(() => {
        setMessage({ type: 'success', text: 'Account deletion initiated. Check your email for confirmation.' });
        setLoading(false);
      }, 1500);
    }
  };

  const handleEnable2FA = () => {
    setLoading(true);
    setTimeout(() => {
      setMessage({ type: 'success', text: 'Two-factor authentication setup initiated. Check your email for next steps.' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Manage your account settings and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              
              {/* Success/Error Message */}
              {message.text && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                  message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {message.text}
                </div>
              )}

              {/* Account Settings */}
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Account Information</h2>
                  
                  <form onSubmit={handleAccountUpdate}>
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={accountData.fullName}
                          onChange={(e) => setAccountData({ ...accountData, fullName: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          placeholder="Enter your full name"
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
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed text-sm sm:text-base"
                        />
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">Email cannot be changed</p>
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
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
                      >
                        <Save className="w-4 h-4" />
                        <span>{loading ? 'Updating...' : 'Update Account'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Security Settings</h2>
                  
                  <form onSubmit={handlePasswordChange} className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? 'text' : 'password'}
                          value={passwordData.currentPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm sm:text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showCurrentPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
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
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm sm:text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showNewPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 text-sm sm:text-base"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
                    >
                      <Lock className="w-4 h-4" />
                      <span>{loading ? 'Updating...' : 'Update Password'}</span>
                    </button>
                  </form>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Add an extra layer of security to your account</p>
                    <button 
                      onClick={handleEnable2FA}
                      disabled={loading}
                      className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm sm:text-base disabled:opacity-50"
                    >
                      Enable 2FA
                    </button>
                  </div>
                </div>
              )}

              {/* Notifications Settings */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Email Notifications</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Receive updates via email</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('emailNotifications')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationData.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notificationData.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Push Notifications</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Receive browser notifications</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('pushNotifications')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationData.pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notificationData.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">SMS Notifications</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Receive text messages</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('smsNotifications')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationData.smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notificationData.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Marketing Emails</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Promotional content</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('marketingEmails')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationData.marketingEmails ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notificationData.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Security Alerts</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Important security updates</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('securityAlerts')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationData.securityAlerts ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notificationData.securityAlerts ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Product Updates</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">New features and improvements</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('productUpdates')}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notificationData.productUpdates ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notificationData.productUpdates ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleSaveNotifications}
                      disabled={loading}
                      className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4" />
                      <span>{loading ? 'Saving...' : 'Save Preferences'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Appearance Settings */}
              {activeTab === 'appearance' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Appearance Settings</h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {/* Theme Selection */}
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Theme</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {themes.map((theme) => {
                          const Icon = theme.icon;
                          return (
                            <button
                              key={theme.id}
                              onClick={() => handleAppearanceChange('theme', theme.id)}
                              className={`flex items-center space-x-3 p-3 sm:p-4 border rounded-lg transition text-left ${
                                appearanceData.theme === theme.id
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <Icon className="w-5 h-5 text-gray-600" />
                              <span className="font-medium text-sm sm:text-base">{theme.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Font Size */}
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Font Size</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {fontSizes.map((size) => (
                          <button
                            key={size.id}
                            onClick={() => handleAppearanceChange('fontSize', size.id)}
                            className={`p-3 border rounded-lg transition text-sm sm:text-base ${
                              appearanceData.fontSize === size.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Density */}
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Density</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {densities.map((density) => (
                          <button
                            key={density.id}
                            onClick={() => handleAppearanceChange('density', density.id)}
                            className={`p-3 border rounded-lg transition text-sm sm:text-base ${
                              appearanceData.density === density.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {density.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font Family */}
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Font Family</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {fonts.map((font) => (
                          <button
                            key={font.id}
                            onClick={() => handleAppearanceChange('fontFamily', font.id)}
                            className={`p-3 border rounded-lg transition text-sm sm:text-base ${
                              appearanceData.fontFamily === font.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            style={font.id === 'georgia' ? { fontFamily: 'Georgia, serif' } : 
                                   font.id === 'roboto' ? { fontFamily: 'Roboto, sans-serif' } :
                                   font.id === 'inter' ? { fontFamily: 'Inter, sans-serif' } : {}}
                          >
                            {font.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleSaveAppearance}
                      disabled={loading}
                      className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4" />
                      <span>{loading ? 'Saving...' : 'Save Appearance'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Privacy Settings */}
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {/* Profile Visibility */}
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Profile Visibility</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {visibilityOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handlePrivacyChange('profileVisibility', option.id)}
                            className={`p-3 border rounded-lg transition text-sm sm:text-base ${
                              privacyData.profileVisibility === option.id
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Privacy Toggles */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Data Sharing</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Allow anonymous usage data collection</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('dataSharing', !privacyData.dataSharing)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacyData.dataSharing ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacyData.dataSharing ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Personalized Ads</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Show relevant advertisements</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('personalizedAds', !privacyData.personalizedAds)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacyData.personalizedAds ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacyData.personalizedAds ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Search Visibility</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Allow search engines to index profile</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('searchVisibility', !privacyData.searchVisibility)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacyData.searchVisibility ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacyData.searchVisibility ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base">Activity Status</h3>
                          <p className="text-gray-500 text-xs sm:text-sm">Show when you're active</p>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('activityStatus', !privacyData.activityStatus)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacyData.activityStatus ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacyData.activityStatus ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        onClick={handleSavePrivacy}
                        disabled={loading}
                        className="flex items-center space-x-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base flex-1 justify-center"
                      >
                        <Save className="w-4 h-4" />
                        <span>{loading ? 'Saving...' : 'Save Privacy Settings'}</span>
                      </button>

                      <button
                        onClick={handleDeleteAccount}
                        disabled={loading}
                        className="flex items-center space-x-2 px-4 sm:px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition disabled:opacity-50 text-sm sm:text-base flex-1 justify-center"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete Account</span>
                      </button>
                    </div>

                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-medium text-yellow-800 text-sm sm:text-base mb-2">Data Protection</h4>
                      <p className="text-yellow-700 text-xs sm:text-sm">
                        Your privacy is important to us. We never sell your personal data to third parties. 
                        Read our <a href="#" className="underline hover:no-underline">Privacy Policy</a> for more information.
                      </p>
                    </div>
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