// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust path if needed

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  // Fix: Define externalLogin using context.setUser and return it
  const externalLogin = (user, token) => {
    context.setUser(user); // Assuming AuthContext provides setUser
    localStorage.setItem('token', token);
    // Add any other logic, e.g., refresh token or update state
  };

  return {
    ...context,
    externalLogin, // Now returned and usable
  };
};