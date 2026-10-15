import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, Star } from 'lucide-react';

const Certifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      name: 'Google Cloud Certified Associate Cloud Engineer',
      issuer: 'Google Cloud',
      year: '2024',
      color: 'blue',
      credentialId: 'e8a3787c493249d7821aff4785b7ee6e',
      skills: ['GCP Services', 'Cloud Infrastructure', 'Compute Engine', 'Cloud Storage']
    },
    {
      name: 'AWS Academy Graduate - Cloud Architecting',
      issuer: 'AWS Academy',
      year: '2024',
      color: 'orange',
      credentialId: 'https://www.credly.com/go/adbA6UHy',
      skills: ['Cloud Architecture', 'AWS Services', 'Infrastructure Design', 'Best Practices']
    },
    {
      name: 'Fundamentals of Java Programming',
      issuer: 'Board Infinity via Coursera',
      year: '2024',
      color: 'red',
      credentialId: '168ESQTOWJPV',
      skills: ['Java Programming', 'Object-Oriented Programming', 'Data Structures', 'Algorithms']
    },
    {
      name: 'OOPs in Java',
      issuer: 'Simplilearn SkillUP',
      year: '2025',
      color: 'purple',
      credentialId: '9406894',
      skills: ['Object-Oriented Programming', 'Java Classes', 'Inheritance', 'Polymorphism']
    },
    {
      name: 'Crash Course on Python',
      issuer: 'Google via Coursera',
      year: '2025',
      color: 'green',
      credentialId: '3V48FOL1EAMK',
      skills: ['Python Programming', 'Data Types', 'Functions', 'File Handling']
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024',
      color: 'orange',
      credentialId: 'AWS-SAA-2024-001',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability']
    },
    {
      name: 'Google Cloud Professional Security Engineer',
      issuer: 'Google Cloud',
      year: '2024',
      color: 'blue',
      credentialId: 'GCP-PSE-2024-002',
      skills: ['GCP Security', 'Identity Management', 'Compliance', 'Threat Detection']
    },
    {
      name: 'UiPath Advanced RPA Developer',
      issuer: 'UiPath',
      year: '2023',
      color: 'purple',
      credentialId: 'UIPATH-ARD-2023-004',
      skills: ['Process Automation', 'Workflow Design', 'Bot Development', 'AI Integration']
    },
    {
      name: 'Fortinet Network Security Expert',
      issuer: 'Fortinet',
      year: '2023',
      color: 'red',
      credentialId: 'FORTINET-NSE-2023-005',
      skills: ['Network Security', 'Firewall Management', 'VPN', 'Threat Prevention']
    },
    {
      name: 'Beginners Guide to Cybersecurity',
      issuer: 'Verified Certificate',
      year: '2024',
      color: 'cyan',
      credentialId: '8e5b5dd77b9e4274a3da326791df4b96',
      skills: ['Cybersecurity Fundamentals', 'Security Awareness', 'Threat Recognition', 'Best Practices']
    },
    {
      name: 'FCF - Introduction to the Threat Landscape 2.0',
      issuer: 'Fortinet Training Institute',
      year: '2024',
      color: 'red',
      credentialId: 'FORTINET-FCF-2024',
      skills: ['Threat Landscape', 'Security Threats', 'Risk Assessment', 'Threat Intelligence']
    },
    {
      name: 'The IT Professional\'s Path to Cybersecurity',
      issuer: 'LinkedIn Learning',
      year: '2025',
      color: 'blue',
      credentialId: '7d6e3177092b233f5c39e21df062420ee0e5ba3017170b45a04e04215a42f658',
      skills: ['Tech Career Skills', 'Cybersecurity Careers', 'Soft Skills', 'Professional Development']
    },
    {
      name: 'SQL for Data Analysis',
      issuer: 'Simplilearn SkillUP',
      year: '2025',
      color: 'green',
      credentialId: '9407033',
      skills: ['SQL Programming', 'Data Analysis', 'Database Queries', 'Data Manipulation']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(certifications.length / 3));
    }, 4000);

    return () => clearInterval(timer);
  }, [certifications.length]);

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'border-orange-400 text-orange-400 bg-orange-500/10',
      blue: 'border-blue-400 text-blue-400 bg-blue-500/10',
      cyan: 'border-cyan-400 text-cyan-400 bg-cyan-500/10',
      purple: 'border-purple-400 text-purple-400 bg-purple-500/10',
      red: 'border-red-400 text-red-400 bg-red-500/10',
      green: 'border-green-400 text-green-400 bg-green-500/10',
      pink: 'border-pink-400 text-pink-400 bg-pink-500/10',
      indigo: 'border-indigo-400 text-indigo-400 bg-indigo-500/10'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const visibleCertifications = certifications.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <section id="certifications" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise across security, cloud, and development
          </p>
        </div>

        {/* Certification Carousel */}
        <div className="relative mb-12">
          <div className="grid md:grid-cols-3 gap-6 min-h-[400px]">
            {visibleCertifications.map((cert, index) => {
              const colorClasses = getColorClasses(cert.color);
              
              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-current transition-all duration-500 transform hover:scale-105 group ${colorClasses} animate-fadeIn`}
                >
                  {/* Certificate Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-current/20 ${cert.color === 'orange' ? 'text-orange-400' : cert.color === 'blue' ? 'text-blue-400' : cert.color === 'cyan' ? 'text-cyan-400' : cert.color === 'purple' ? 'text-purple-400' : cert.color === 'red' ? 'text-red-400' : cert.color === 'green' ? 'text-green-400' : cert.color === 'pink' ? 'text-pink-400' : 'text-indigo-400'} group-hover:scale-110 transition-transform duration-300`}>
                      <Award size={24} />
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-current transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300 font-medium">{cert.issuer}</span>
                        <span className="text-current font-semibold">{cert.year}</span>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <div className="text-xs text-gray-400 mb-1">Credential ID</div>
                      <div className="text-sm font-mono text-gray-300">{cert.credentialId}</div>
                    </div>

                    {/* Skills */}
                    <div>
                      <div className="text-sm font-semibold text-gray-400 mb-2">Skills Validated</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700 hover:border-current transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verify Button */}
                    <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-current rounded-lg transition-all duration-300 group/btn">
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="text-sm font-medium">Verify Certificate</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(certifications.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
            <div className="text-gray-400 text-sm">Total Certifications</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">5</div>
            <div className="text-gray-400 text-sm">Cloud Platforms</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
            <div className="text-gray-400 text-sm">Security Specializations</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Pass Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;