import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <footer
      className="relative bg-gray-100 dark:bg-gray-800 py-12 text-center text-gray-600 dark:text-gray-300 text-sm transition-all duration-500 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</>', '{}', '[]', '()', '<html>', '<css>', '<js>'].map((symbol, i) => (
          <div
            key={symbol}
            className="absolute text-blue-400 opacity-20 font-mono text-lg animate-code-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div
        className={`relative z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-4">
          <p className="text-white font-medium text-lg mb-2 animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-blue-400 mx-auto w-fit">
            &copy; {new Date().getFullYear()} Dasari Naveen
          </p>
          <p className="text-gray-300 animate-fade-in-up" style={{ animationDelay: '2s' }}>
            Crafted with passion using React & Spring Boot
          </p>
        </div>

        {/* ✅ TECH STACK ICONS (with working links) */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          {[
            { icon: '⚛️', name: 'React', url: 'https://nextleap.app/online-compiler/reactjs-programming', color: '#61DAFB' },
            { icon: '🍃', name: 'Spring', url: 'https://www.jdoodle.com/login-to-continue', color: '#6DB33F' },
            { icon: '☕', name: 'Java', url: 'https://nextleap.app/online-compiler/java-programming', color: '#ED8B00' },
            { icon: '🗄️', name: 'MySQL', url: 'https://nextleap.app/online-compiler/sql-programming', color: '#4479A1' },
          ].map((tech, i) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer transform transition-all duration-300 hover:scale-125 hover:-translate-y-2"
              style={{ animationDelay: `${2.5 + i * 0.3}s` }}
            >
              <div className="relative">
                <span
                  className="text-2xl block animate-bounce-slow"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    filter: `drop-shadow(0 0 8px ${tech.color}50)`,
                  }}
                >
                  {tech.icon}
                </span>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-400 whitespace-nowrap">{tech.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="relative mb-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse-slow"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* You can add real links for social buttons here if needed */}
        <div className="flex justify-center space-x-4">
          {['💼', '🐙', '📧', '🔗'].map((icon, i) => (
            <button
              key={i}
              className="group relative p-3 rounded-full bg-gray-700 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              style={{ animationDelay: `${3 + i * 0.2}s` }}
            >
              <span className="text-lg group-hover:animate-pulse">{icon}</span>
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-wave"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        @keyframes code-float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-30px) translateX(20px) rotate(90deg); opacity: 0.4; }
          50% { transform: translateY(-15px) translateX(-15px) rotate(180deg); opacity: 0.3; }
          75% { transform: translateY(-25px) translateX(30px) rotate(270deg); opacity: 0.5; }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); opacity: 0.2; }
        }
        @keyframes typewriter {
          0% { width: 0; }
          70% { width: 100%; }
          100% { width: 100%; border-right: none; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-code-float {
          animation: code-float linear infinite;
        }
        .animate-typewriter {
          animation: typewriter 3s steps(30) forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
