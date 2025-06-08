import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            About Me
          </motion.h1>

          <div className="max-w-4xl mx-auto px-4 space-y-12">
            <motion.section
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  I am pursuing my PhD in AI-based materials science at the Technical University of Munich (TUM), 
                  working under the supervision of{' '}
                  <a 
                    href="https://www.ph.nat.tum.de/ai4ms/team/patrick-rinke/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Prof. Patrick Rinke
                  </a>.
                </p>
                <p>
                  I am also being advised by {' '}
                  <a 
                    href="https://www.utu.fi/en/people/ondrej-krejci" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Dr. Ondrej Krejci
                  </a>{' '}
                  on developing high-throughput workflows for catalyst screening. Our work combines 
                  Machine-learned Force Fields (MLFF) with other machine learning methods to 
                  accelerate the discovery and optimization of catalysts.
                </p>
                <p>
                  My research interests are centered around novel materials discovery for heterogeneous catalysis 
                  for a sustainable circular economy.
                </p>
                <p>
                  During my free time, I enjoy staying active through gymming, exploring the outdoors through hiking, 
                  and traveling to new places. I also find joy in reading and expanding my knowledge through literature.
                </p>
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 