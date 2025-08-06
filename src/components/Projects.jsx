import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [imageError, setImageError] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Dashboard",
      image: "/images/ecommerce.jpg",
      description: "Designed a dynamic dashboard to visualize sales data, customer insights, and inventory levels using React, Chart.js, and Material UI."
    },
    {
      id: 2,
      name: "Task Management App",
      image: "/images/task-management.jpeg",
      description: "Created a productivity tool with task creation, drag-and-drop prioritization, deadlines, and notifications using React and Redux Toolkit."
    },
  ];

  const handleImageError = (projectId) => {
    setImageError(prev => ({ ...prev, [projectId]: true }));
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageLoad = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: false }));
  };

  const handleImageLoadStart = (projectId) => {
    setImageLoading(prev => ({ ...prev, [projectId]: true }));
  };

  const SplitText = ({ text, className }) => {
    return (
      <div
        className={className}
        style={{
          ...styles.splitTextContainer,
          color: '#ffffff',
        }}
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="split-char"
            style={{
              ...styles.splitChar,
              animationDelay: `${index * 0.1}s`
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div 
      id="projects" 
      style={{
        ...styles.container,
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
      className={`projects-container ${isVisible ? 'fade-in' : ''}`}
    >
      {/* Animated Background Elements */}
      <div className="animated-bg">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
        
        {/* Animated particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="grid-overlay"></div>
        
        {/* Gradient waves */}
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <SplitText 
          text="My Projects" 
          className="heading-animation"
        />
        
        <div 
          style={styles.projectGrid}
          className={`project-grid ${animateCards ? 'cards-visible' : ''}`}
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              style={{
                ...styles.card,
                animationDelay: `${index * 0.2}s`
              }} 
              className="card project-card"
            >
              <div style={styles.imageContainer}>
                {imageLoading[project.id] && (
                  <div style={styles.loadingPlaceholder}>
                    <div style={styles.spinner}></div>
                  </div>
                )}
                {imageError[project.id] ? (
                  <div style={styles.errorPlaceholder}>
                    <div style={styles.errorIcon}>📷</div>
                    <p style={styles.errorText}>Image not available</p>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    style={{
                      ...styles.image,
                      display: imageLoading[project.id] ? 'none' : 'block'
                    }}
                    onError={() => handleImageError(project.id)}
                    onLoad={() => handleImageLoad(project.id)}
                    onLoadStart={() => handleImageLoadStart(project.id)}
                  />
                )}
              </div>
              <h3 style={styles.title}>{project.name}</h3>
              <p style={styles.description}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .projects-container.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Animated Background */
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Floating Orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, #4f46e5, #7c3aed, #ec4899);
          opacity: 0.1;
          animation: floatOrb 20s infinite ease-in-out;
          filter: blur(1px);
        }
        
        .orb-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .orb-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: -7s;
        }
        
        .orb-3 {
          width: 120px;
          height: 120px;
          bottom: 20%;
          left: 20%;
          animation-delay: -14s;
        }
        
        .orb-4 {
          width: 180px;
          height: 180px;
          top: 30%;
          right: 30%;
          animation-delay: -21s;
        }
        
        .orb-5 {
          width: 100px;
          height: 100px;
          bottom: 10%;
          right: 10%;
          animation-delay: -28s;
        }
        
        @keyframes floatOrb {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(50px, -30px) rotate(90deg);
          }
          50% {
            transform: translate(-30px, 50px) rotate(180deg);
          }
          75% {
            transform: translate(-50px, -20px) rotate(270deg);
          }
        }
        
        /* Particles */
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #ffffff;
          border-radius: 50%;
          opacity: 0.6;
          animation: particleFloat 15s infinite linear;
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
        
        /* Generate random positions for particles */
        ${[...Array(20)].map((_, i) => `
          .particle-${i + 1} {
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 15}s;
            animation-duration: ${10 + Math.random() * 10}s;
          }
        `).join('')}
        
        /* Grid Overlay */
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridShift 20s infinite linear;
        }
        
        @keyframes gridShift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        /* Gradient Waves */
        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(79, 70, 229, 0.03), transparent);
          animation: waveMove 25s infinite ease-in-out;
        }
        
        .wave-1 {
          top: -50%;
          left: -50%;
          animation-delay: 0s;
        }
        
        .wave-2 {
          top: -30%;
          right: -50%;
          animation-delay: -8s;
          background: linear-gradient(135deg, transparent, rgba(236, 72, 153, 0.03), transparent);
        }
        
        .wave-3 {
          bottom: -50%;
          left: -30%;
          animation-delay: -16s;
          background: linear-gradient(225deg, transparent, rgba(124, 58, 237, 0.03), transparent);
        }
        
        @keyframes waveMove {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
        }
        
        /* Text animations */
        .split-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: splitReveal 0.6s ease-out forwards;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }
        
        @keyframes splitReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Card animations */
        .project-card {
          opacity: 0;
          transform: translateY(50px) scale(0.9);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 10;
        }
        
        .cards-visible .project-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        
        .card:hover::before {
          left: 100%;
        }
        
        .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .card:hover img {
          transform: scale(1.05);
        }
        
        .card img {
          transition: transform 0.4s ease;
        }
        
        @media (max-width: 768px) {
          .card:hover {
            transform: translateY(-5px) scale(1.01);
          }
          .split-char {
            font-size: 2rem;
          }
          .floating-orb {
            opacity: 0.05;
          }
          .particle {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
    maxWidth: '1200px',
    margin: '0 auto',
    transition: 'background-color 0.3s ease',
  },
  splitTextContainer: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
    fontWeight: '600',
    perspective: '1000px',
    transition: 'color 0.3s ease',
  },
  splitChar: {
    display: 'inline-block',
    transformOrigin: 'center bottom',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.06)',
    transition: 'all 0.3s ease-in-out',
    maxWidth: '400px',
    margin: '0 auto',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '220px',
    marginBottom: '16px',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
  },
  loadingPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #e9ecef',
    borderTop: '4px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  errorPlaceholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '2px dashed #dee2e6',
  },
  errorIcon: {
    fontSize: '2rem',
    marginBottom: '8px',
    opacity: 0.6,
  },
  errorText: {
    fontSize: '0.9rem',
    color: '#6c757d',
    margin: 0,
    textAlign: 'center',
  },
  title: {
    fontSize: '1.4rem',
    color: '#1a1a1a',
    marginBottom: '10px',
    fontWeight: '600',
  },
  description: {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default Projects;