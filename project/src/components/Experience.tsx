import React from 'react';
import { Building, Calendar, Award, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Palo Alto Networks',
      role: 'Cybersecurity Virtual Intern',
      period: 'Jan - Mar 2025',
      type: 'Virtual',
      description: '10-week comprehensive cybersecurity virtual internship focusing on advanced threat analysis, network security, and next-generation firewall technologies.',
      achievements: [
        'Completed advanced cybersecurity training modules',
        'Gained expertise in Palo Alto Networks security solutions',
        'Developed skills in threat detection and prevention'
      ],
      color: 'red'
    },
    {
      company: 'EduSkills & APSCHE',
      role: 'UiPath RPA Developer & Ethical Hacking Intern',
      period: '2024 - 2025',
      type: 'Long-term',
      description: '240-hour comprehensive internship combining RPA development with ethical hacking. Organized by EduSkills in collaboration with Andhra Pradesh State Council of Higher Education.',
      achievements: [
        'Mastered UiPath RPA development and automation',
        'Gained hands-on ethical hacking experience',
        'Completed 240 hours of intensive training'
      ],
      color: 'purple'
    },
    {
      company: 'Zscaler',
      role: 'Zero Trust Cloud Security Virtual Intern',
      period: 'Jul - Sep 2025',
      type: 'Virtual',
      description: '10-week virtual internship focused on Zero Trust security architecture, cloud security principles, and advanced threat protection in cloud environments.',
      achievements: [
        'Learned Zero Trust security architecture principles',
        'Gained expertise in cloud security best practices',
        'Developed skills in advanced threat protection'
      ],
      color: 'blue'
    },
    {
      company: 'Ethical Hacking Institute',
      role: 'Ethical Hacking Virtual Intern',
      period: 'Apr - Jun 2025',
      type: 'Virtual',
      description: '10-week intensive virtual internship covering ethical hacking methodologies, penetration testing, and vulnerability assessment techniques.',
      achievements: [
        'Mastered ethical hacking methodologies',
        'Conducted penetration testing exercises',
        'Performed comprehensive vulnerability assessments'
      ],
      color: 'green'
    },
    {
      company: 'Datavalley India Pvt. Ltd.',
      role: 'Cybersecurity Ethical Hacking Intern',
      period: 'Dec 2025 - Mar 2026',
      type: 'Long-term',
      description: 'Comprehensive cybersecurity internship focusing on ethical hacking, penetration testing, and security assessment. Collaboration with APSCHE for advanced security training.',
      achievements: [
        'Advanced penetration testing techniques',
        'Security vulnerability assessments',
        'Ethical hacking methodologies'
      ],
      color: 'red'
    },
    {
      company: 'Bluestock',
      role: 'Software Development Engineer Intern',
      period: 'Oct - Nov 2024',
      type: 'Internship',
      description: 'Software development internship at fintech company focusing on full-stack development, system design, and modern development practices with emphasis on financial applications.',
      achievements: [
        'Engineered and optimized frontend components for fintech dashboards, significantly improving user experience',
        'Implemented robust API integrations following industry best practices for reliable data processing',
        'Enhanced application performance and system stability through structured development practices'
      ],
      color: 'blue'
    },
    {
      company: 'Palo Alto Networks',
      role: 'Security Research Intern',
      period: '2024 - Present',
      type: 'Remote',
      description: 'Advanced threat analysis, malware research, and security tool development. Working on next-generation firewall technologies and threat intelligence platforms.',
      achievements: [
        'Developed automated threat detection algorithms',
        'Contributed to security research publications',
        'Improved threat analysis workflow efficiency by 40%'
      ],
      color: 'red'
    },
    {
      company: 'UiPath',
      role: 'RPA Developer & Automation Specialist',
      period: '2023 - 2024',
      type: 'Hybrid',
      description: 'Designed and implemented robotic process automation solutions for enterprise clients. Specialized in workflow optimization and intelligent automation.',
      achievements: [
        'Automated 50+ business processes',
        'Reduced manual effort by 70% across projects',
        'Led automation training workshops'
      ],
      color: 'blue'
    },
    {
      company: 'TCS (Forage Program)',
      role: 'Full-Stack Development Trainee',
      period: '2023',
      type: 'Virtual',
      description: 'Intensive training program focusing on modern web development, cloud computing, and agile methodologies. Worked on real-world enterprise applications.',
      achievements: [
        'Completed advanced React.js certification',
        'Built scalable microservices architecture',
        'Collaborated on cloud migration projects'
      ],
      color: 'cyan'
    },
    {
      company: 'Mastercard (Forage Program)',
      role: 'Cybersecurity Analyst Trainee',
      period: '2023',
      type: 'Virtual',
      description: 'Comprehensive cybersecurity training covering threat modeling, incident response, and security architecture design for financial systems.',
      achievements: [
        'Conducted security assessments',
        'Developed incident response procedures',
        'Earned advanced cybersecurity certification'
      ],
      color: 'green'
    },
    {
      company: 'JPMorgan Chase (Forage Program)',
      role: 'Software Engineering Trainee',
      period: '2022',
      type: 'Virtual',
      description: 'Financial technology development program focusing on trading systems, risk management, and high-performance computing applications.',
      achievements: [
        'Built real-time trading dashboard',
        'Optimized high-frequency trading algorithms',
        'Learned financial data analysis techniques'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'border-red-400 text-red-400',
      blue: 'border-blue-400 text-blue-400',
      cyan: 'border-cyan-400 text-cyan-400',
      green: 'border-green-400 text-green-400',
      purple: 'border-purple-400 text-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getGradientClasses = (color: string) => {
    const gradients = {
      red: 'from-red-500/10 to-red-600/10',
      blue: 'from-blue-500/10 to-blue-600/10',
      cyan: 'from-cyan-500/10 to-cyan-600/10',
      green: 'from-green-500/10 to-green-600/10',
      purple: 'from-purple-500/10 to-purple-600/10'
    };
    return gradients[color as keyof typeof gradients] || gradients.blue;
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise through diverse roles in security, development, and automation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-green-400 to-purple-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const gradientClasses = getGradientClasses(exp.color);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-0`}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-current bg-gray-900 z-10 ${colorClasses}`}></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 ml-16 md:ml-0' : 'md:pl-12 ml-16 md:ml-0'}`}>
                    <div className={`backdrop-blur-sm bg-gradient-to-r ${gradientClasses} rounded-2xl p-6 border border-white/10 hover:border-current transition-all duration-300 group ${colorClasses}`}>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-current/20 ${exp.color === 'red' ? 'text-red-400' : exp.color === 'blue' ? 'text-blue-400' : exp.color === 'cyan' ? 'text-cyan-400' : exp.color === 'green' ? 'text-green-400' : 'text-purple-400'}`}>
                            <Building size={20} />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                            <p className="text-current font-semibold">{exp.role}</p>
                          </div>
                        </div>
                        <span className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full">{exp.type}</span>
                      </div>

                      {/* Period */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-current flex items-center space-x-2">
                          <Award size={16} />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect Professionally</h3>
            <p className="text-gray-400 mb-6">
              Open to discussing new opportunities, collaborations, and innovative projects
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink size={20} />
              <span>View LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;