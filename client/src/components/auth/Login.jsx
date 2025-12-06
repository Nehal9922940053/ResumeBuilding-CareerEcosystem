

// import React, { useState } from 'react';
// import { Mail, Lock } from 'lucide-react';
// // import { useAuth } from '../../hooks/useAuth';
// import { useAuth } from '../../context/AuthContext';
// import Input from '../common/Input';
// import Button from '../common/Button';
// import GoogleAuth from './GoogleAuth';
// import {useNavigate} from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
// const { login, externalLogin } = useAuth();

//   const navigate = useNavigate();

//   const handleGoogleSuccess = (user, token) => {
//     // Integrate with useAuth (e.g., login(user, token))
//     login({ email: user.email }, ''); // Or update useAuth to handle external login
//     navigate('/dashboard');
//   };

//   const handleGoogleError = (errorMsg) => {
//     setError(errorMsg);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//       setError('');
//     try {
//       await login(email, password);
//        navigate('/dashboard');
//     } catch (error) {
//       console.error('Login failed:', error);
//        setError(error.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
//           <p className="text-gray-600">Sign in to your CareerForge account</p>
//         </div>

//           {/* Error Message */}
//         {error && (
//           <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
//             {error}
//           </div>
//         )}


//         <form onSubmit={handleSubmit} className="space-y-6">
//           <Input
//             label="Email Address"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />

//           <Input
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             autoComplete="current-password"  // Add this
//             required
//           />

//           <Button
//             type="submit"
//             variant="primary"
//             size="lg"
//             className="w-full"
//             disabled={loading}
//           >
//             {loading ? 'Signing In...' : 'Sign In'}
//           </Button>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300" />
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <GoogleAuth onSuccess={handleGoogleSuccess} onError={handleGoogleError}  buttonText="signin_with"/>
//           </div>
//         </div>

//         <p className="mt-8 text-center text-gray-600">
//           Don't have an account?{' '}
//           <a href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';  // Ensure this is the correct path
import Input from '../common/Input';
import Button from '../common/Button';
import GoogleAuth from './GoogleAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, externalLogin } = useAuth();  // externalLogin is available here

  const navigate = useNavigate();

  const handleGoogleSuccess = (user, token) => {
    // FIXED: Use externalLogin for OAuth - no need for email/password login
    externalLogin(user, token);
    navigate('/dashboard');
    console.log('Google login successful!');
  };

  const handleGoogleError = (errorMsg) => {
    setError(errorMsg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your CareerForge account</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"  // FIXED: Add autocomplete for accessibility
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6">
            <GoogleAuth 
              onSuccess={handleGoogleSuccess} 
              onError={handleGoogleError} 
              buttonText="signin_with"  // From previous fix
            />
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;