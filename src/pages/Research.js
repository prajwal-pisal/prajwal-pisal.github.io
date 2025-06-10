import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-24 pt-28 pb-16"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Research
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto px-4"
          >
            <motion.section variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Current Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">AICon Project</h3>
                  </div>
                  <p className="text-gray-700">
                    Part of my PhD research, this project focuses on AI-guided CO₂ conversion to methanol. 
                    In collaboration with the experimental group led by Prof. Annukka Santasalo-Aarnio at Aalto University, 
                    we are optimizing catalyst design and reaction conditions using machine learning.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CO₂ Conversion</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Database Creation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Catalysis</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Catalyst Descriptor Design</h3>
                  </div>
                  <p className="text-gray-700">
                    In this project I am focusing on developing 
                    high-throughput screening workflows for catalysts by designing descriptors for specific applications. 
                    The project utilizes models from the Open Catalyst Project led by Meta.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Open Catalyst Project</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">High-Throughput</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">HPC</span>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Research; 