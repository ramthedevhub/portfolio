import React from 'react';
import { Heart, Code, Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
    'React', 'TypeScript', 'Tailwind CSS', 'Python', 'Flask', 
    'Docker', 'AWS', 'PostgreSQL', 'Redis', 'Git'
  ];

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-cyan-400">RA</span> Manikanta Bathula
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer passionate about building secure, scalable applications 
              and protecting digital infrastructure through innovative cybersecurity solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-cyan-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:ram.thedevhub@gmail.com"
                className="p-2 bg-gray-800 hover:bg-green-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Terminal size={20} className="text-cyan-400" />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} RA Manikanta Bathula. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and</span>
              <Code size={16} className="text-cyan-400" />
            </div>

            {/* Version/Status */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Status: Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Easter Egg - Terminal Animation */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-2">terminal</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400">
              <span className="text-cyan-400">$</span> whoami
            </div>
            <div className="text-gray-300">RA Manikanta Bathula - Full-Stack Developer & Cybersecurity Analyst</div>
            <div className="text-green-400">
              <span className="text-cyan-400">$</span> cat skills.txt
            </div>
            <div className="text-gray-300">Security-focused development, Cloud architecture, DevSecOps</div>
            <div className="text-green-400">
              <span className="text-cyan-400">$</span> <span className="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;