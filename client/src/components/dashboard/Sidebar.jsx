// import React from 'react';
// import { FileText, Settings, User, LogOut, Home } from 'lucide-react';
// import { useAuth } from '../../hooks/useAuth';
// import { Link, useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const menuItems = [
//     { icon: Home, label: 'Dashboard', href: '/dashboard' },
//     { icon: FileText, label: 'Resume Builder', href: '/resume-builder' },
//     { icon: User, label: 'Profile', href: '/profile' },
//     { icon: Settings, label: 'Settings', href: '/settings' },
//   ];



//   const handleLogout = async () => {
//   try {
//     await logout();
//     navigate('/');
//   } catch (error) {
//     console.log("Logout error:", error);
//   }
// }

//   return (
//     <div className="w-64 bg-white shadow-sm min-h-screen p-6">
//       <div className="flex items-center space-x-2 mb-8">
//         <FileText className="w-8 h-8 text-blue-600" />
//         <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//           CareerForge
//         </h1>
//       </div>

//       <nav className="space-y-2">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           return (
//             <Link
//               key={item.label}
//               to={item.href}
//               className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
//             >
//               <Icon className="w-5 h-5" />
//               <span className="font-medium">{item.label}</span>
//             </Link>
//           );
//         })}
//       </nav>

//       <div className="mt-auto pt-8 border-t border-gray-200">
//         <div className="flex items-center space-x-3 px-4 py-3">
//           <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//             <User className="w-4 h-4 text-blue-600" />
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="text-sm font-medium text-gray-900 truncate">
//               {user?.name || 'User'}
//             </p>
//             <p className="text-sm text-gray-500 truncate">
//               {user?.email}
//             </p>
//           </div>
//         </div>

//         <button
//           onClick={handleLogout}
//           className="flex items-center space-x-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition w-full mt-2"
//         >
//           <LogOut className="w-5 h-5" />
//           <span className="font-medium">Sign Out</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { FileText, Settings, User, LogOut, Home, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: FileText, label: 'Resume Builder', href: '/resume-builder' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 min-h-screen bg-white shadow-sm transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-4 lg:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
              <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CareerForge
              </h1>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = isActiveLink(item.href);
              
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => onClose()}
                  className={`
                    flex items-center space-x-3 px-3 py-3 text-sm lg:text-base rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600 border border-blue-200' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="pt-4 lg:pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-3 px-3 py-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-3 py-3 text-sm lg:text-base text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition w-full mt-1"
            >
              <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;