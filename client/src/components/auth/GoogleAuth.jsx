

// import React, { useState, useCallback } from 'react';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// const GoogleAuth = ({ onSuccess, onError }) => {
//   const [loading, setLoading] = useState(false);

//   // Define clientId
//   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

//   // Handle Google response
//   const handleGoogleResponse = useCallback(async (response) => {
//     if (!response || !response.credential) {
//       if (onError) onError('Invalid Google response');
//       return;
//     }
//     setLoading(true);
//     try {
//       // Decode the JWT token to get user info
//       const payload = response.credential.split('.')[1];
//       const userInfo = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/'))); // Handle base64 padding
      
//       // Prepare data for backend
//       const authData = {
//         googleId: userInfo.sub,
//         email: userInfo.email,
//         fullName: userInfo.name,
//         profileImage: userInfo.picture,
//       };

//       // Send to backend
//       const res = await fetch('/api/auth/google', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(authData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         localStorage.setItem('token', data.data.token);
//         if (onSuccess) onSuccess(data.data.user, data.data.token);
//         console.log('Google auth successful:', data.data.user);
//       } else {
//         throw new Error(data.message || 'Google auth failed');
//       }
//     } catch (error) {
//       console.error('Google auth error:', error);
//       if (onError) onError(error.message || 'Authentication failed');
//     } finally {
//       setLoading(false);
//     }
//   }, [onSuccess, onError]);

//   // Handle Google error
//   const handleGoogleError = useCallback((error) => {
//     console.error('Google login error:', error);
//     if (onError) onError('Google login failed. Please try again.');
//     setLoading(false);
//   }, [onError]);

//   if (!clientId) {
//     return (
//       <button disabled className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed">
//         Google Client ID Missing
//       </button>
//     );
//   }

//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <GoogleLogin
//         onSuccess={handleGoogleResponse}
//         onError={handleGoogleError}
//         theme="outline"
//         size="large"
//         text="signup_with"
//         shape="rectangular"
//         logo_alignment="left"
//         width="100%"
//         useOneTap={false} // Disable One Tap to avoid FedCM issues in dev
//         auto_select={false}
//         cancel_on_tap_outside={true}
//         loadingElement={
//           <div className="flex items-center justify-center w-full py-3">
//             <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
//               <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
//               <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
//             </svg>
//             Authenticating...
//           </div>
//         }
//         disabled={loading}
//         onLoading={() => setLoading(true)}
//       />
//     </GoogleOAuthProvider>
//   );
// };

// export default GoogleAuth;

import React, { useState, useCallback } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({ onSuccess, onError, buttonText = 'signup_with' }) => {
  const [loading, setLoading] = useState(false);

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const handleGoogleResponse = useCallback(async (response) => {
    console.log('Google response received:', response);
    
    if (!response || !response.credential) {
      console.error('Invalid Google response:', response);
      if (onError) onError('Invalid Google response');
      return;
    }
    
    setLoading(true);
    
    try {
      console.log('Sending credential to backend:', `${API_BASE_URL}/api/auth/google`);
      
      const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          credential: response.credential
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Google authentication failed');
      }

      if (data.success) {
        console.log('Google auth successful:', data.data.user);
        localStorage.setItem('token', data.data.token);
        if (onSuccess) onSuccess(data.data.user, data.data.token);
      } else {
        throw new Error(data.message || 'Google auth failed');
      }
    } catch (error) {
      console.error('Google auth error:', error);
      if (onError) onError(error.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  }, [onSuccess, onError, API_BASE_URL]);

  const handleGoogleError = useCallback((error) => {
    console.error('Google login error:', error);
    if (onError) onError('Google login failed. Please try again.');
    setLoading(false);
  }, [onError]);

  if (!clientId) {
    return (
      <div className="w-full p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
        <p className="font-medium">Google Sign-In Unavailable</p>
        <p className="text-xs mt-1">Please configure VITE_GOOGLE_CLIENT_ID in your environment variables</p>
      </div>
    );
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="w-full">  {/* Full-width container via CSS */}
        <GoogleLogin
          onSuccess={handleGoogleResponse}
          onError={handleGoogleError}
          theme="outline"
          size="large"
          text={buttonText}
          shape="rectangular"
          logo_alignment="left"
          // Remove width="100%" - use container class instead
          useOneTap={false}
          auto_select={false}
          cancel_on_tap_outside={true}
          disabled={loading}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;