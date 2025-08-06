import { useState, useEffect } from 'react';
import { Code, Server, Database, Layers, GitBranch } from 'lucide-react';

const skills = [
  { 
    name: 'React', 
    icon: Code, 
    color: 'text-blue-500',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    shadowColor: 'shadow-blue-500/30'
  },
  { 
    name: 'Node.js', 
    icon: Server, 
    color: 'text-green-500',
    bgGradient: 'from-green-500/20 to-emerald-500/20',
    shadowColor: 'shadow-green-500/30'
  },
  { 
    name: 'Spring Boot', 
    icon: Layers, 
    color: 'text-green-600',
    bgGradient: 'from-green-600/20 to-lime-500/20',
    shadowColor: 'shadow-green-600/30'
  },
  { 
    name: 'MongoDB', 
    icon: Database, 
    color: 'text-green-700',
    bgGradient: 'from-green-700/20 to-teal-500/20',
    shadowColor: 'shadow-green-700/30'
  },
  { 
    name: 'PostgreSQL', 
    icon: GitBranch, 
    color: 'text-blue-700',
    bgGradient: 'from-blue-700/20 to-indigo-500/20',
    shadowColor: 'shadow-blue-700/30'
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced title with stagger animation */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Technical Skills
          </h2>
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
          ></div>
          <p 
            className={`mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Technologies and frameworks I work with to build amazing applications
          </p>
        </div>

        {/* Enhanced skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={skill.name}
                className={`group relative transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 150 + 600}ms`,
                  animationDelay: `${index * 150}ms`
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background card */}
                <div 
                  className={`
                    relative p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50
                    bg-gradient-to-br ${skill.bgGradient} backdrop-blur-sm
                    transform transition-all duration-500 ease-out cursor-pointer
                    hover:scale-110 hover:-translate-y-2 hover:rotate-1
                    ${isHovered ? `shadow-2xl ${skill.shadowColor}` : 'shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50'}
                  `}
                >
                  {/* Floating particles effect */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-current rounded-full animate-ping opacity-75"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full animate-ping opacity-75 delay-200"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-current rounded-full animate-ping opacity-75 delay-100"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-current rounded-full animate-ping opacity-75 delay-300"></div>
                    </>
                  )}

                  {/* Icon with rotation and glow effect */}
                  <div className="text-center relative">
                    <div 
                      className={`
                        inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl
                        bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                        transform transition-all duration-500 ease-out
                        ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
                        shadow-lg group-hover:shadow-xl
                      `}
                    >
                      <IconComponent 
                        className={`
                          text-3xl ${skill.color} 
                          transform transition-all duration-500 ease-out
                          ${isHovered ? 'scale-110 drop-shadow-lg' : 'scale-100'}
                        `} 
                      />
                    </div>

                    {/* Skill name with typewriter effect */}
                    <h3 
                      className={`
                        text-sm font-semibold text-gray-800 dark:text-white
                        transform transition-all duration-300 ease-out
                        ${isHovered ? 'scale-105' : 'scale-100'}
                      `}
                    >
                      {skill.name}
                    </h3>

                    {/* Progress bar animation */}
                    <div className="mt-3 w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className={`
                          h-full bg-gradient-to-r ${skill.color.replace('text-', 'from-')} to-transparent
                          transform transition-all duration-1000 ease-out origin-left
                          ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                        `}
                        style={{ 
                          transitionDelay: `${index * 200 + 1200}ms`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Hover overlay with pulse effect */}
                  <div 
                    className={`
                      absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.bgGradient}
                      opacity-0 group-hover:opacity-30 transition-opacity duration-500
                      animate-pulse
                    `}
                  ></div>
                </div>

                {/* Floating label on hover */}
                {isHovered && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 text-xs rounded-lg shadow-lg animate-fadeIn whitespace-nowrap">
                    {skill.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 dark:border-t-white"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional animated elements */}
        <div className="mt-16 text-center">
          <div 
            className={`
              inline-flex items-center space-x-2 px-6 py-3 
              bg-gradient-to-r from-blue-500/10 to-purple-500/10 
              rounded-full border border-gray-200/50 dark:border-gray-700/50
              transform transition-all duration-1000 delay-1000
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Always learning and growing
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;