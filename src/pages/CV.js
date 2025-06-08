import React from 'react';
import { motion } from 'framer-motion';

const CV = () => {
  const education = [
    {
      degree: "PhD in AI-based Materials Science",
      institution: "Technical University of Munich (TUM), Germany & Aalto University, Finland",
      period: "2022 - Present",
      details: "Supervisor: Prof. Patrick Rinke"
    }
  ];

  const skills = [
    { category: "Technical Skills", items: ["Python", "Git", "Linux", "HPC", "Data Analysis" ] },
    { category: "Research", items: ["Materials Science", "Catalysis", "Density Functional Theory"] }
  ];

  const languages = [
    { language: "English", level: "Fluent", flag: "🇬🇧" },
    { language: "Marathi", level: "Native", flag: "🇮🇳" },
    { language: "Hindi", level: "Fluent", flag: "🇮🇳" },

    { language: "German", level: "Intermediate", flag: "🇩🇪" },
    { language: "Finnish", level: "Basic", flag: "🇫🇮" },
    { language: "Kannada", level: "Basic", flag: "🇮🇳" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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
            Curriculum Vitae
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto px-4 space-y-8"
          >
            {/* Education Section */}
            <motion.section variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h3 className="text-xl font-medium">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500">{edu.period}</p>
                    <p className="text-gray-700 mt-2">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h3 className="font-semibold mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Languages Section */}
            <motion.section variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{lang.flag}</span>
                      <h3 className="font-semibold text-lg">{lang.language}</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                        {lang.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <motion.a
              href="/Prajwal_Academic_CV_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Download Full CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV; 