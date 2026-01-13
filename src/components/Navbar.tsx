import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '产品与服务', path: '/products' },
    { name: '解决方案', path: '/solutions' },
    { name: '新闻中心', path: '/news' },
    { name: '关于码隆', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/70 backdrop-blur-md shadow-glass border-b border-white/20'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative flex items-center">
              <span className={`text-2xl font-heading font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-malong-blue' : 'text-white'
                }`}>
                码隆<span className="text-malong-green">科技</span>
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-malong-green group-hover:w-full transition-all duration-300"
                layoutId="underline"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 group ${isActive(link.path)
                  ? 'text-malong-blue font-bold'
                  : scrolled ? 'text-gray-600 hover:text-malong-blue' : 'text-blue-50 hover:text-white'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="desktop-navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-malong-blue rounded-full"
                  />
                )}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-malong-light transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'hidden' : 'block'}`}></span>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold shadow-neon transition-all ${scrolled
                ? 'bg-malong-blue text-white hover:bg-malong-dark'
                : 'bg-white text-malong-blue hover:bg-blue-50'
                }`}
            >
              咨询合作
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive(link.path)
                      ? 'bg-blue-50 text-malong-blue'
                      : 'text-gray-600 hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                    {isActive(link.path) && <ChevronRight size={16} />}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-4 bg-gradient-to-r from-malong-blue to-malong-light text-white px-6 py-3.5 rounded-xl text-base font-bold shadow-lg active:scale-95 transition-transform"
              >
                立即咨询
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
