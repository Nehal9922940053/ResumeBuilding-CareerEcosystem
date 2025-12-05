
// import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// export const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Check if user is logged in on app start
//   const checkAuthStatus = useCallback(async () => {
//     try {
//       setError(null);
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         setLoading(false);
//         return;
//       }

//       const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         setUser(data.data);
//       } else {
//         localStorage.removeItem('token');
//         setUser(null);
//       }
//     } catch (error) {
//       console.error('Auth check failed:', error);
//       localStorage.removeItem('token');
//       setUser(null);
//       setError('Failed to verify authentication status');
//     } finally {
//       setLoading(false);
//     }
//   }, [API_BASE_URL]); // Added dependency to fix potential stale closure

//   useEffect(() => {
//     checkAuthStatus();
//   }, [checkAuthStatus]);

//   const register = async (email, password, name) => {
//     try {
//       setError(null);
//       setLoading(true);
      
//       const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           fullName: name
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       if (data.success) {
//         const { user, token } = data.data;
//         localStorage.setItem('token', token);
//         setUser(user);
//         return { success: true, user };
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       setError(null);
//       setLoading(true);
      
//       const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       if (data.success) {
//         const { user, token } = data.data;
//         localStorage.setItem('token', token);
//         setUser(user);
//         return { success: true, user };
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fixed: externalLogin for Google OAuth (uses setUser from provider scope)
//   const externalLogin = (user, token) => {
//     setUser(user);
//     localStorage.setItem('token', token);
//     setError(null);
//     setLoading(false);
//     // Optionally call checkAuthStatus() here if needed for refresh
//   };

//   const logout = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (token) {
//         await fetch(`${API_BASE_URL}/api/auth/logout`, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });
//       }
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       setUser(null);
//       localStorage.removeItem('token');
//       setError(null);
//     }
//   };

//   const updateUser = (userData) => {
//     setUser(prevUser => ({
//       ...prevUser,
//       ...userData
//     }));
//   };

//   const updateProfile = async (profileData) => {
//     try {
//       setError(null);
//       setLoading(true);
//       const token = localStorage.getItem('token');
      
//       const response = await fetch(`${API_BASE_URL}/api/users/profile`, { // Fixed: Matches backend userRoutes
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(profileData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to update profile');
//       }

//       if (data.success) {
//         updateUser(data.data);
//         return { success: true, user: data.data };
//       }
//     } catch (error) {
//       console.error('Profile update error:', error);
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updatePassword = async (currentPassword, newPassword) => {
//     try {
//       setError(null);
//       setLoading(true);
//       const token = localStorage.getItem('token');
      
//       const response = await fetch(`${API_BASE_URL}/api/auth/update-password`, { // Fixed: Matches backend authRoutes
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ currentPassword, newPassword }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to update password');
//       }

//       if (data.success) {
//         return { success: true };
//       }
//     } catch (error) {
//       console.error('Password update error:', error);
//       setError(error.message);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearError = () => {
//     setError(null);
//   };

//   const value = {
//     user,
//     login,
//     register,
//     externalLogin, // Exposed for GoogleAuth
//     logout,
//     updateUser,
//     updateProfile,
//     updatePassword,
//     loading,
//     error,
//     clearError,
//     checkAuthStatus
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkAuthStatus = useCallback(async () => {
    try {
      setError(null);
      const token = localStorage.getItem('token');
      
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.data);
      } else {
        localStorage.removeItem('token');
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      setUser(null);
      setError('Failed to verify authentication status');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const register = async (email, password, name) => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          fullName: name
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      if (data.success) {
        const { user, token } = data.data;
        localStorage.setItem('token', token);
        setUser(user);
        return { success: true, user };
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      if (data.success) {
        const { user, token } = data.data;
        localStorage.setItem('token', token);
        setUser(user);
        return { success: true, user };
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // FIXED: Properly implemented externalLogin for OAuth
  const externalLogin = useCallback((userData, token) => {
    try {
      localStorage.setItem('token', token);
      setUser(userData);
      setError(null);
      setLoading(false);
      console.log('External login successful:', userData);
    } catch (error) {
      console.error('External login error:', error);
      setError('Failed to complete login');
      throw error;
    }
  }, []);

  const logout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await fetch(`${API_BASE_URL}/api/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('token');
      setError(null);
    }
  };

  const updateUser = (userData) => {
    setUser(prevUser => ({
      ...prevUser,
      ...userData
    }));
  };

  const updateProfile = async (profileData) => {
    try {
      setError(null);
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update profile');
      }

      if (data.success) {
        updateUser(data.data);
        return { success: true, user: data.data };
      }
    } catch (error) {
      console.error('Profile update error:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updatePassword = async (currentPassword, newPassword) => {
    try {
      setError(null);
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/api/auth/update-password`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update password');
      }

      if (data.success) {
        return { success: true };
      }
    } catch (error) {
      console.error('Password update error:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value = {
    user,
    login,
    register,
    externalLogin, // Now properly exposed
    logout,
    updateUser,
    updateProfile,
    updatePassword,
    loading,
    error,
    clearError,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};