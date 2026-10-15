import React from 'react';
import { 
  Code, Database, Cloud, Shield, GitBranch, Server, 
  Smartphone, Palette, Lock, Terminal, Cpu, Globe 
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'cyan',
      icon: Code,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'green',
      icon: Server,
      skills: [
        { name: 'Flask', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      color: 'blue',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'Kubernetes', level: 70 }
      ]
    },
    {
      title: 'Cybersecurity',
      color: 'red',
      icon: Shield,
      skills: [
        { name: 'Threat Modeling', level: 85 },
        { name: 'IAM', level: 80 },
        { name: 'Ethical Hacking', level: 75 },
        { name: 'SIEM', level: 70 },
        { name: 'Penetration Testing', level: 75 }
      ]
    },
    {
      title: 'Database & Analytics',
      color: 'purple',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Power BI', level: 90 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'orange',
      icon: Terminal,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'border-cyan-400 text-cyan-400 shadow-cyan-400/25',
      green: 'border-green-400 text-green-400 shadow-green-400/25',
      blue: 'border-blue-400 text-blue-400 shadow-blue-400/25',
      red: 'border-red-400 text-red-400 shadow-red-400/25',
      purple: 'border-purple-400 text-purple-400 shadow-purple-400/25',
      orange: 'border-orange-400 text-orange-400 shadow-orange-400/25'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getProgressColor = (color: string) => {
    const colors = {
      cyan: 'from-cyan-500 to-cyan-300',
      green: 'from-green-500 to-green-300',
      blue: 'from-blue-500 to-blue-300',
      red: 'from-red-500 to-red-300',
      purple: 'from-purple-500 to-purple-300',
      orange: 'from-orange-500 to-orange-300'
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning across modern development, security practices, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            const progressColor = getProgressColor(category.color);
            
            return (
              <div
                key={categoryIndex}
                className={`backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-current hover:shadow-lg transition-all duration-300 group ${colorClasses}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-current/10 ${category.color === 'cyan' ? 'text-cyan-400' : category.color === 'green' ? 'text-green-400' : category.color === 'blue' ? 'text-blue-400' : category.color === 'red' ? 'text-red-400' : category.color === 'purple' ? 'text-purple-400' : 'text-orange-400'} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${progressColor} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies I Work With - Icon Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Technologies I Work With</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <Code size={24} className="text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">Frontend</h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">React</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">HTML5</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">CSS3</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">JavaScript</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Tailwind</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Vue.js</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <Server size={24} className="text-green-400" />
                <h4 className="text-lg font-semibold text-white">Backend</h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-green-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Node.js</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-green-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Express</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-green-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Flask</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-green-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Python</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-green-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">MongoDB</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-green-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">PostgreSQL</span>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <Cloud size={24} className="text-blue-400" />
                <h4 className="text-lg font-semibold text-white">DevOps</h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Docker</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">K8s</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Jenkins</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">GitHub</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Azure</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-blue-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Terraform</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-red-400/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <Shield size={24} className="text-red-400" />
                <h4 className="text-lg font-semibold text-white">Security</h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Linux</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Bash</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" alt="Red Hat" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Red Hat</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/wireshark/wireshark-original.svg" alt="Wireshark" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Wireshark</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="Ansible" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Ansible</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-red-400/10 transition-colors duration-300">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" className="w-8 h-8" />
                  <span className="text-xs text-gray-300">Nginx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;