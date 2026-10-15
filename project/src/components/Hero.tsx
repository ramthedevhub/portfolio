import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Code, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Software Engineer',
    'Full-Stack Developer', 
    'Cybersecurity Analyst',
    'DevSecOps Engineer'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume
    window.open('#', '_blank');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300d9ff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 100 + 50}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              RA Manikanta
            </span>
            <br />
            <span className="text-gray-200">Bathula</span>
          </h1>

          {/* Animated Title */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-cyan-400 min-h-[2em] flex items-center">
              {displayText}
              <span className="ml-1 w-1 h-8 bg-cyan-400 animate-pulse"></span>
            </h2>
          </div>

          {/* Catchphrase */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Developing <span className="text-green-400 font-semibold">scalable</span>, 
            <span className="text-blue-400 font-semibold"> high-performance</span> applications with 
            <span className="text-purple-400 font-semibold"> robust security</span> practices and 
            <span className="text-cyan-400 font-semibold"> cloud-native</span> architecture
          </p>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 py-8">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Code size={24} />
              <span className="text-sm">Development</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <Shield size={24} />
              <span className="text-sm">Security</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Zap size={24} />
              <span className="text-sm">Performance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
            >
              <span>Explore Projects</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={downloadResume}
              className="group px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg transform transition-all duration-300 hover:bg-green-400 hover:text-gray-900 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 flex items-center space-x-2"
            >
              <Download size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;