import React from 'react';
import { GraduationCap, Code2, Shield, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const timelineItems = [
    {
      year: '2024',
      title: 'Cybersecurity Specialization',
      description: 'Advanced threat analysis and security implementation',
      icon: Shield,
      color: 'text-red-400'
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      description: 'Modern web applications with cloud integration',
      icon: Code2,
      color: 'text-blue-400'
    },
    {
      year: '2022',
      title: 'IoT & Blockchain',
      description: 'Emerging technologies and decentralized systems',
      icon: Cpu,
      color: 'text-green-400'
    },
    {
      year: '2021',
      title: 'Computer Science Education',
      description: 'Foundation in algorithms and software engineering',
      icon: GraduationCap,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Software Engineer & Full-Stack Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a Software Engineer (2026) specializing in developing comprehensive full-stack applications 
                that prioritize reliability, efficiency, and security-first design principles.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I architect and implement complete systems spanning frontend and backend technologies, ensuring 
                seamless data management, intuitive user experiences, and consistent performance optimization. 
                Beyond full-stack development, I integrate security best practices including comprehensive input 
                validation, secure authentication mechanisms, and structured data handling.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I possess extensive hands-on experience with cloud platforms including AWS and Google Cloud, 
                enabling me to design and implement scalable deployment strategies and cloud-native architectures. 
                My objective is to deliver production-ready applications that are maintainable, scalable, and 
                engineered for enterprise-level deployment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold text-green-400">15+</div>
                <div className="text-gray-400 text-sm">Certifications</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left">
              Education & Specialization Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-green-400 to-purple-400"></div>
              
              {timelineItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative flex items-start space-x-6 pb-8 group">
                    {/* Timeline Icon */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 border-2 border-current ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-current hover:shadow-lg transition-all duration-300 group">
                        <div className={`text-sm font-semibold ${item.color} mb-1`}>{item.year}</div>
                        <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;