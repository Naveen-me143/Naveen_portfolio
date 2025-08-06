import React, { useState, useEffect } from 'react';
import '../styles/responsive.css';
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingElement = ({ delay, size, color, position }) => (
    <div
      style={{
        ...styles.floatingElement,
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        ...position,
      }}
    />
  );

  return (
    <section id="hero" style={styles.section}>
      {/* Floating background elements */}
      <FloatingElement delay={0} size={60} color="rgba(59, 130, 246, 0.1)" position={{ top: '10%', left: '10%' }} />
      <FloatingElement delay={1} size={40} color="rgba(139, 92, 246, 0.1)" position={{ top: '70%', left: '15%' }} />
      <FloatingElement delay={2} size={80} color="rgba(6, 182, 212, 0.1)" position={{ top: '20%', right: '10%' }} />
      <FloatingElement delay={1.5} size={35} color="rgba(59, 130, 246, 0.15)" position={{ bottom: '20%', right: '20%' }} />

      <div style={styles.container}>
        {/* Left Section */}
        <div 
          style={{
            ...styles.leftSection,
            transform: `translateX(${isVisible ? 0 : -100}px)`,
            opacity: isVisible ? 1 : 0,
          }}
        >
          <h1 style={styles.heading} className="glitch-text">
            <span style={styles.textReveal}>Hi, I'm</span>{" "}
            <span style={styles.nameHighlight} className="gradient-text">
              Dasari Naveen
            </span>
          </h1>
          
          <p style={styles.subtitle} className="typewriter">
            Full Stack Developer
          </p>
          
          <p style={styles.description}>
            I build clean and scalable web applications with modern technologies.
          </p>
          
          <ul style={styles.bulletList}>
            {[
              "Expertise in React, Node.js, and RESTful APIs for robust backend and frontend.",
              "Passionate about creating responsive, user-friendly UI/UX designs.",
              "Experience with state management tools like Redux and Context API.",
              "Proficient in database design and management using SQL and NoSQL.",
              "Strong problem-solving skills and keen attention to detail.",
            ].map((point, index) => (
              <li 
                key={index} 
                style={{
                  ...styles.bulletItem,
                  animationDelay: `${0.8 + index * 0.2}s`,
                }}
                className="slide-in-left"
              >
                <span style={styles.bulletIcon} className="pulse-icon">💻</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - 3D Image */}
        <div style={styles.rightSection}>
          <div 
            style={{
              ...styles.imageWrapper,
              transform: `
                perspective(1000px) 
                rotateX(${mousePosition.y * 10}deg) 
                rotateY(${mousePosition.x * 10}deg)
                translateZ(${isVisible ? 0 : 200}px)
              `,
              opacity: isVisible ? 1 : 0,
            }}
            className="image-3d"
          >
            <div style={styles.imageContainer} className="floating-container">
              <img
                src="./images/men.avif"
                alt="Dasari Naveen - Full Stack Developer"
                style={styles.profileImage}
                className="profile-image-3d"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233b82f6;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%238b5cf6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' font-size='60' text-anchor='middle' dy='.3em' fill='white'%3E👨‍💻%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='18' text-anchor='middle' dy='.3em' fill='white'%3EDasari Naveen%3C/text%3E%3C/svg%3E";
                }}
              />
              
              {/* 3D Rings around image */}
              <div style={styles.ring1} className="rotating-ring" />
              <div style={styles.ring2} className="rotating-ring-reverse" />
              <div style={styles.ring3} className="rotating-ring" />
              
              {/* Glowing particles */}
              <div style={styles.particle1} className="floating-particle" />
              <div style={styles.particle2} className="floating-particle" />
              <div style={styles.particle3} className="floating-particle" />
              <div style={styles.particle4} className="floating-particle" />
            </div>

            {/* 3D Shadow */}
            <div style={styles.shadow3d} />
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        /* 3D Image Animations */
        .image-3d {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
        }

        .floating-container {
          animation: floatUpDown 6s ease-in-out infinite;
        }

        .profile-image-3d {
          transition: all 0.4s ease;
          transform-style: preserve-3d;
        }

        .profile-image-3d:hover {
          transform: scale(1.1) rotateZ(5deg);
        }

        /* Rotating 3D Rings */
        .rotating-ring {
          animation: rotate3D 8s linear infinite;
          transform-style: preserve-3d;
        }

        .rotating-ring-reverse {
          animation: rotate3DReverse 6s linear infinite;
          transform-style: preserve-3d;
        }

        @keyframes rotate3D {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(120deg); }
          66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(240deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }

        @keyframes rotate3DReverse {
          0% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
          100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
        }

        /* Floating Particles */
        .floating-particle {
          animation: particleFloat 4s ease-in-out infinite;
        }

        .floating-particle:nth-child(odd) {
          animation-delay: -2s;
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) scale(1.2);
            opacity: 1;
          }
          50% { 
            transform: translateY(-10px) translateX(-15px) scale(0.8);
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-30px) translateX(5px) scale(1.1);
            opacity: 0.9;
          }
        }

        /* Text Animations */
        .glitch-text {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes textGlow {
          from { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
          to { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5); }
        }

        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .typewriter {
          overflow: hidden;
          border-right: 3px solid #3b82f6;
          white-space: nowrap;
          animation: typing 2s steps(20) 1s forwards, blink 1s infinite 3s;
          width: 0;
        }

        @keyframes typing {
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        /* Bullet Point Animations */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.6s ease-out forwards;
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .pulse-icon {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
          }
          50% { 
            transform: scale(1.2);
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8));
          }
        }

        /* Background Elements */
        @keyframes floatBackground {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .image-3d {
            transform: none !important;
          }
          
          .typewriter {
            width: 100% !important;
            animation: none !important;
            border: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 0',
    backgroundColor: '#0f0f23',
    background: 'radial-gradient(ellipse at center, #1a1a3e 0%, #0f0f23 100%)',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '80px',
    zIndex: 2,
    position: 'relative',
  },
  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    animation: 'floatBackground 8s ease-in-out infinite',
    zIndex: 1,
  },
  leftSection: {
    flex: '1',
    maxWidth: '600px',
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  heading: {
    fontSize: '4rem',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.1',
  },
  textReveal: {
    color: '#e2e8f0',
  },
  nameHighlight: {
    fontStyle: 'italic',
    fontSize: '4.2rem',
  },
  subtitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '30px',
    color: '#94a3b8',
    maxWidth: '300px',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '40px',
    maxWidth: '500px',
    lineHeight: '1.7',
    color: '#cbd5e1',
  },
  bulletList: {
    marginBottom: '40px',
    listStyle: 'none',
    padding: 0,
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '20px',
    color: '#94a3b8',
    lineHeight: '1.6',
    fontSize: '1.05rem',
  },
  bulletIcon: {
    fontSize: '1.3rem',
    flexShrink: 0,
    marginTop: '2px',
  },
  rightSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1000px',
  },
  imageWrapper: {
    position: 'relative',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transformStyle: 'preserve-3d',
  },
  imageContainer: {
    position: 'relative',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 25px 50px rgba(59, 130, 246, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)',
    border: '3px solid rgba(255, 255, 255, 0.2)',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  shadow3d: {
    position: 'absolute',
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '300px',
    height: '50px',
    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(20px)',
  },
  ring1: {
    position: 'absolute',
    top: '-30px',
    left: '-30px',
    right: '-30px',
    bottom: '-30px',
    border: '2px solid rgba(59, 130, 246, 0.3)',
    borderRadius: '50%',
    borderTop: '2px solid #3b82f6',
  },
  ring2: {
    position: 'absolute',
    top: '-50px',
    left: '-50px',
    right: '-50px',
    bottom: '-50px',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '50%',
    borderRight: '1px solid #8b5cf6',
  },
  ring3: {
    position: 'absolute',
    top: '-70px',
    left: '-70px',
    right: '-70px',
    bottom: '-70px',
    border: '1px solid rgba(6, 182, 212, 0.2)',
    borderRadius: '50%',
    borderLeft: '1px solid #06b6d4',
  },
  particle1: {
    position: 'absolute',
    top: '20%',
    right: '-10px',
    width: '8px',
    height: '8px',
    background: '#3b82f6',
    borderRadius: '50%',
    boxShadow: '0 0 20px #3b82f6',
  },
  particle2: {
    position: 'absolute',
    bottom: '30%',
    left: '-15px',
    width: '6px',
    height: '6px',
    background: '#8b5cf6',
    borderRadius: '50%',
    boxShadow: '0 0 15px #8b5cf6',
  },
  particle3: {
    position: 'absolute',
    top: '60%',
    right: '-20px',
    width: '10px',
    height: '10px',
    background: '#06b6d4',
    borderRadius: '50%',
    boxShadow: '0 0 25px #06b6d4',
  },
  particle4: {
    position: 'absolute',
    top: '10%',
    left: '-10px',
    width: '5px',
    height: '5px',
    background: '#f59e0b',
    borderRadius: '50%',
    boxShadow: '0 0 12px #f59e0b',
  },
};

export default Hero;