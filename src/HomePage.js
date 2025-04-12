// src/HomePage.js

import React from "react";
// import { Button } from "@/components/ui/button"; // Comment this out if you're not using shadcn/ui
import { Link } from "react-scroll";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
          {/* Navigation Bar */}
          <nav className="bg-gray-100 shadow sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
              <h1 className="text-xl font-semibold">Prajwal Pisal</h1>
              <div className="space-x-4 text-sm">
                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">About</Link>
                <Link to="research" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Research</Link>
                <Link to="publications" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Publications</Link>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Projects</Link>
                <Link to="cv" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">CV</Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Contact</Link>
              </div>
            </div>
          </nav>
    
          <main className="p-6 max-w-4xl mx-auto space-y-10">
            <section id="about" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-2">About</h2>
              <p className="text-base text-gray-700">
                Doctoral Researcher at Technical University of Munich | Researcher in AI-guided catalysis & CO₂ conversion
              </p>
              <p className="mt-2 text-gray-600">
                A dynamic researcher with a multidisciplinary background, specializing in materials science and machine learning.
                Currently focused on developing AI workflows for efficient CO₂ conversion to support global sustainability goals.
              </p>
            </section>
    
            <section id="research" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-2">Research</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Machine Learning for Materials Science and Heterogeneous Catalysis</li>
                <li>AI workflows for CO₂ conversion to methanol</li>
                <li>High-performance computing and simulation-based catalyst screening</li>
              </ul>
            </section>
    
            <section id="publications" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-2">Publications</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Pisal, Prajwal, Ondrej Krejci, and Patrick Rinke (2024). <br />
                  <i>
                    "Machine-learning Accelerated Descriptor Design for Catalyst Discovery: A CO₂ to Methanol Conversion Case Study"
                  </i>. arXiv preprint arXiv:2412.13838.
                </li>
              </ul>
            </section>
    
            <section id="projects" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-2">Projects</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>AICon Project – AI-driven workflows for CO₂-to-methanol catalysis</li>
                <li>Open Catalyst Project – Integration with ML models for catalyst prediction</li>
              </ul>
            </section>
    
            <section id="cv" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-2">CV</h2>
              <a
                href="/Prajwal_Academic_CV_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border px-4 py-2 rounded">Download CV</button>
              </a>
            </section>
    
            <section id="contact" className="scroll-mt-20">
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p className="text-gray-700">Email: <a href="mailto:prajwal.pisal@tum.de" className="text-blue-600">prajwal.pisal@tum.de</a></p>
              <p className="text-gray-700">Phone: +49 1521 7587048</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/prajwal-dattatray-pisal" target="_blank" className="text-blue-600">LinkedIn</a>
                <a href="https://scholar.google.com/citations?user=rEJf_IQAAAAJ&hl=en" target="_blank" className="text-blue-600">Google Scholar</a>
                <a href="https://www.ph.nat.tum.de/ai4ms/team/" target="_blank" className="text-blue-600">TUM Profile</a>
                <a href="https://research.aalto.fi/en/persons/prajwal-pisal" target="_blank" className="text-blue-600">Aalto Profile</a>
              </div>
            </section>
          </main>
        </div>
      );
};

export default HomePage;