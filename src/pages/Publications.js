import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
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
            Publications
          </motion.h1>

          <div className="max-w-6xl mx-auto px-4 space-y-12">
            {/* Preprint Section */}
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Preprints</h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Machine Learning Accelerated Descriptor Design for Catalyst Discovery in CO₂ to Methanol Conversion
                    </h3>
                    <p className="text-gray-600">Prajwal Pisal, Ondrej Krejci, Patrick Rinke</p>
                    <p className="text-gray-600">arXiv:2412.13838</p>
                    <a
                      href="https://arxiv.org/abs/2412.13838"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      View on arXiv
                    </a>
                  </div>
                  <motion.div 
                    className="w-full md:w-2/3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src="/images/aed_workflow.svg"
                      alt="TOC for ML Accelerated Descriptor Design"
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        filter: "brightness(1.05)"
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Datasets Section */}
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Datasets</h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Final geometries and energies, statistical analysis and estimated errors of single metals and bimetallics for CO₂ to methanol conversion
                    </h3>
                    <p className="text-gray-600">Prajwal Pisal, Ondrej Krejci, Patrick Rinke</p>
                    <p className="text-gray-600">2024</p>
                    <a
                      href="https://doi.org/10.5281/zenodo.13370373"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      View on Zenodo
                    </a>
                  </div>
                  <motion.div 
                    className="w-full md:w-2/3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.img
                      src="/images/dataset_visualization.svg"
                      alt="Dataset Visualization"
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        filter: "brightness(1.05)"
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications; 