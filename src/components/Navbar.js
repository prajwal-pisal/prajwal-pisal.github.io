import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/research', label: 'Research' },
    { path: '/publications', label: 'Publications' },
    { path: '/cv', label: 'CV' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[2000px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link 
              to="/" 
              className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              Prajwal Pisal
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? isScrolled
                          ? 'bg-blue-600/10 text-blue-600'
                          : 'bg-white/20 text-white'
                        : isScrolled
                          ? 'text-gray-600 hover:bg-blue-600/10 hover:text-blue-600'
                          : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 