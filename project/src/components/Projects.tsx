import React from 'react';
import { ExternalLink, Github, Shield, Code, BarChart, Database } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Cybersuite',
      description: 'Engineered an IoT-enabled LPG monitoring and automated booking platform leveraging ESP32 microcontrollers for real-time gas level monitoring.',
      tech: ['ESP32', 'IoT', 'Python', 'Flask', 'Real-time Monitoring'],
      icon: Shield,
      color: 'red',
      github: '',
      demo: '#',
      features: ['Real-time monitoring', 'Automated booking', 'IoT integration', 'Alert mechanisms']
    },
    {
      title: 'Smart Healthcare Portal',
      description: 'Developed a comprehensive patient data management platform utilizing React and Flask architecture with enterprise-grade security.',
      tech: ['React', 'Flask', 'RBAC', 'PostgreSQL', 'Security'],
      icon: Code,
      color: 'blue',
      github: '',
      demo: '#',
      features: ['Role-Based Access Control', 'Patient data management', 'Secure authentication', 'Healthcare compliance']
    },
    {
      title: 'EChain-ID',
      description: 'Architected a decentralized identity verification platform to eliminate single points of failure in traditional validation systems.',
      tech: ['Blockchain', 'Smart Contracts', 'Decentralized Identity', 'Security'],
      icon: BarChart,
      color: 'green',
      github: '',
      demo: '#',
      features: ['Decentralized verification', 'Immutable data structures', 'Consensus mechanisms', 'Identity management']
    },
    {
      title: 'BeyondChats Article Manager',
      description: 'Developed a high-performance content processing engine using Node.js with advanced data management and automation capabilities.',
      tech: ['Node.js', 'Data Processing', 'Automation', 'Content Management'],
      icon: Database,
      color: 'purple',
      github: '',
      demo: '#',
      features: ['Content processing', 'Deduplication algorithms', 'Data consistency', 'High-volume operations']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'border-red-400 text-red-400 hover:shadow-red-400/25',
      blue: 'border-blue-400 text-blue-400 hover:shadow-blue-400/25',
      green: 'border-green-400 text-green-400 hover:shadow-green-400/25',
      purple: 'border-purple-400 text-purple-400 hover:shadow-purple-400/25'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getGradientClasses = (color: string) => {
    const gradients = {
      red: 'from-red-500/20 to-red-600/20',
      blue: 'from-blue-500/20 to-blue-600/20',
      green: 'from-green-500/20 to-green-600/20',
      purple: 'from-purple-500/20 to-purple-600/20'
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions combining security, performance, and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const colorClasses = getColorClasses(project.color);
            const gradientClasses = getGradientClasses(project.color);
            
            return (
              <div
                key={index}
                className={`group backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-current transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${colorClasses}`}
              >
                {/* Project Header */}
                <div className={`p-6 bg-gradient-to-r ${gradientClasses} border-b border-white/10`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-current/20 ${project.color === 'red' ? 'text-red-400' : project.color === 'blue' ? 'text-blue-400' : project.color === 'green' ? 'text-green-400' : 'text-purple-400'} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} />
                    </div>
                    <div className="flex space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-300"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      <a
                        href={project.demo}
                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="View demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Project Features */}
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700 hover:border-current transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">More Projects</h3>
            <p className="text-gray-400 mb-6">
              Explore additional projects and contributions on my GitHub profile
            </p>
            <a
              href="https://github.com/ramcodeverse"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;