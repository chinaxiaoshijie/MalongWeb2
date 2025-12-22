
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品与服务', path: '/products' },
    { name: '解决方案', path: '/solutions' },
    { name: '新闻中心', path: '/news' },
    { name: '关于码隆', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-800 tracking-tight">码隆<span className="text-green-600">科技</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-700 font-semibold border-b-2 border-blue-700'
                    : 'text-gray-600 hover:text-blue-600'
                } px-1 py-2 text-sm transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-all shadow-md">
              咨询合作
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                } block px-3 py-4 text-base rounded-md`}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full text-center bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium mt-4">
              咨询合作
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
