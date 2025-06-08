import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const announcements = [
    {
      date: "January 2025",
      title: "Continuing PhD project at Technical University of Munich",
      location: "Garching, Germany",
      link: "https://www.tum.de/en",
      description: "Continuing research in AI-Guided CO₂ conversion"
    },
    {
      date: "May 2023",
      title: "Visiting Researcher at Carnegie Mellon University",
      location: "Pittsburgh, USA",
      link: "https://www.cmu.edu",
      description: "Collaborating with Open Catalyst Project researchers"
    },
    {
      date: "August 2022",
      title: "Started PhD at Aalto University",
      location: "Espoo, Finland",
      link: "https://www.aalto.fi/en",
      description: "Project on AI-Guided CO₂ conversion"
    },
    {
      date: "May 2022",
      title: "Graduated with BS-MS dual degree in Chemistry",
      location: "Tirupati, India",
      link: "https://www.iisertirupati.ac.in",
      description: "Indian Institute of Science Education and Research (IISER)"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-200 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                opacity: [null, Math.random() * 0.5 + 0.2]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-24 pt-28 pb-16"
        >
          {/* Welcome Section with Photo */}
          <section className="w-full px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Photo Section */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-72 h-72 md:w-96 md:h-96 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                <motion.img
                  src="/images/profile.jpg"
                  alt="Prajwal Pisal"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center md:text-left flex-1"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Welcome to My Portfolio
                </h1>
                <p className="text-2xl text-gray-600 max-w-2xl">
                  Doctoral Researcher at Technical University of Munich
                </p>
              </motion.div>
            </div>
          </section>

          {/* Research Focus Cards */}
          <section className="w-full px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-semibold mb-4">Research Focus</h2>
                <p className="text-lg text-gray-700">
                  Specializing in atomistic modeling and machine learning-based materials design to develop sustainable solutions.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-semibold mb-4">Latest Work</h2>
                <p className="text-lg text-gray-700">
                  Currently focused on developing ML-accelerated workflows for heterogeneous catalysis of CO₂ to methanol.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Announcements Section */}
          <section className="w-full px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold mb-8 text-center">Recent Updates</h2>
            <div className="space-y-8">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <span className="text-blue-600 font-semibold text-lg">{announcement.date}</span>
                    <span className="text-gray-600 text-lg">{announcement.location}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {announcement.title}
                    </a>
                  </h3>
                  <p className="text-lg text-gray-700">{announcement.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 