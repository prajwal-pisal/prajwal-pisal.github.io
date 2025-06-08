import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="p-6 max-w-4xl mx-auto"
      >
        <Outlet />
      </motion.main>
    </div>
  );
};

export default Layout; 