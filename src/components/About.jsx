import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setParticlesLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB', level: 90 },
    { name: 'Spring Boot', icon: '🍃', color: '#6DB33F', level: 85 },
    { name: 'MySQL', icon: '🗄️', color: '#4479A1', level: 80 },
    { name: 'Java', icon: '☕', color: '#ED8B00', level: 88 },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E', level: 92 },
    { name: 'HTML/CSS', icon: '🎨', color: '#E34F26', level: 95 }
  ];

  const achievements = [
    { icon: '🛡️', title: 'Cyber Security', desc: '5-day Bootcamp' },
    { icon: '🤖', title: 'Arduino', desc: 'Home Automation' },
    { icon: '🎖️', title: 'NCC', desc: 'B-Certificate' },
    { icon: '💼', title: 'Internships', desc: 'EXCELR, JSPIDERS' }
  ];

  return (
    <section
      id="about"
      style={styles.section}
      className="about-section"
    >
      {/* Animated Background */}
      <div style={styles.backgroundOverlay}>
        {particlesLoaded && [...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
              boxShadow: `0 0 10px 2px rgba(97, 218, 251, 0.6)`
            }}
            className="floating-particle"
          />
        ))}
      </div>

      <div style={styles.container}>
        {/* Header */}
        <div
          style={{
            ...styles.header,
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : 50}px)`
          }}
          className="header-animation"
        >
          <h2 style={styles.title} className="gradient-title">
            About Me
          </h2>
          <div style={styles.titleUnderline} className="expanding-line" />
        </div>

        <div style={styles.content}>
          {/* Personal Info Card */}
          <div
            style={{
              ...styles.personalCard,
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? 0 : -100}px)`
            }}
            className="personal-card-slide"
          >
            <div style={styles.cardGlow} className="card-glow" />

            <div style={styles.profileSection}>
              <div style={styles.avatar} className="avatar-pulse">
                <span style={styles.avatarText}>DN</span>
                <div style={styles.avatarGlow} />
              </div>
              <div style={styles.profileInfo}>
                <h3 style={styles.name} className="name-typewriter">
                  Dasari Naveen
                </h3>
                <p style={styles.role} className="role-fade">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div style={styles.aboutText} className="text-reveal">
              <p style={styles.description}>
                👋 I'm a driven Full Stack Developer skilled in building modern, scalable web applications 
                that solve real-world problems. I'm passionate about creating seamless user experiences 
                and robust backend systems.
              </p>
            </div>

            <div style={styles.infoGrid}>
              <div style={styles.infoItem} className="info-slide">
                <span style={styles.infoIcon}>🎓</span>
                <div>
                  <h4 style={styles.infoTitle}>Education</h4>
                  <p style={styles.infoDesc}>B.Tech ECE, JBIET Hyderabad (2025)</p>
                </div>
              </div>

              <div style={styles.infoItem} className="info-slide">
                <span style={styles.infoIcon}>🌐</span>
                <div>
                  <h4 style={styles.infoTitle}>Languages</h4>
                  <p style={styles.infoDesc}>Telugu, English, Hindi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            style={{
              ...styles.skillsSection,
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? 0 : 100}px)`
            }}
            className="skills-section-slide"
          >
            <h3 style={styles.sectionTitle} className="section-title-glow">
              Technical Skills
            </h3>

            <div style={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  style={{
                    ...styles.skillCard,
                    animationDelay: `${index * 0.1}s`,
                    transform: hoveredSkill === skill.name ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredSkill === skill.name
                      ? `0 20px 40px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.5)`
                      : '0 10px 30px rgba(255, 255, 255, 0.1)'
                  }}
                  className="skill-card-bounce"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div style={styles.skillHeader}>
                    <span style={styles.skillIcon}>{skill.icon}</span>
                    <h4 style={styles.skillName}>{skill.name}</h4>
                  </div>

                  <div style={styles.skillProgress}>
                    <div style={styles.progressBg}>
                      <div
                        style={{
                          ...styles.progressFill,
                          width: `${skill.level}%`,
                          background: `linear-gradient(45deg, ${skill.color}, ${skill.color}dd)`
                        }}
                        className="progress-fill-animation"
                      />
                    </div>
                    <span style={styles.skillLevel}>{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div
          style={{
            ...styles.achievementsSection,
            opacity: isVisible ? 1 : 0,
            transform: `translateY(${isVisible ? 0 : 50}px)`
          }}
          className="achievements-fade"
        >
          <h3 style={styles.sectionTitle} className="section-title-glow">
            Achievements & Certifications
          </h3>

          <div style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                style={{
                  ...styles.achievementCard,
                  animationDelay: `${index * 0.15}s`
                }}
                className="achievement-card-slide"
              >
                <div style={styles.achievementIcon} className="achievement-icon-bounce">
                  {achievement.icon}
                </div>
                <h4 style={styles.achievementTitle}>{achievement.title}</h4>
                <p style={styles.achievementDesc}>{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Background Animations */
        .floating-particle {
          animation: floatParticle linear infinite;
          border-radius: 50%;
          opacity: 0.6;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Title Animations */
        .gradient-title {
          background: linear-gradient(45deg, #61dafb, #21a1f1, #61dafb);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 5s ease infinite;
          color: white;
          font-weight: 900;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .expanding-line {
          animation: expandLine 1.5s ease-out 0.5s forwards;
          width: 0;
          height: 5px;
          background: linear-gradient(90deg, #61dafb, #21a1f1);
          margin: 0 auto;
          border-radius: 3px;
        }

        @keyframes expandLine {
          to { width: 120px; }
        }

        /* Personal Card Animations */
        .personal-card-slide {
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(20, 20, 20, 0.8);
          border: 1px solid #333;
          color: #eee;
          box-shadow: 0 0 20px #0077ff44;
          border-radius: 15px;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .card-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle at center, #61dafb88, transparent);
          filter: blur(20px);
          opacity: 0.6;
          pointer-events: none;
          z-index: 0;
          animation: pulseGlow 3s ease-in-out infinite;
          border-radius: 15px;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }

        .avatar-pulse {
          animation: pulseScale 3s ease-in-out infinite;
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #21a1f1, #61dafb);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 28px;
          font-weight: 700;
          user-select: none;
          box-shadow: 0 0 20px #61dafb99;
          z-index: 1;
          overflow: visible;
        }

        @keyframes pulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .avatar-pulse::after {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          box-shadow: 0 0 20px #61dafbcc;
          animation: pulseGlow 3s ease-in-out infinite;
          opacity: 0.7;
          z-index: -1;
        }

        /* Typewriter effect */
        .name-typewriter {
          overflow: hidden;
          border-right: .15em solid #61dafb;
          white-space: nowrap;
          animation: typing 2.5s steps(15, end), blink-caret .75s step-end infinite;
          color: #61dafb;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          0%, 100% { border-color: transparent }
          50% { border-color: #61dafb }
        }

        /* Fade animations */
        .role-fade {
          animation: fadeIn 2s ease forwards;
          color: #aaa;
          margin-top: 5px;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .text-reveal {
          animation: fadeInUp 1.2s ease forwards;
          margin-top: 15px;
          color: #ccc;
          line-height: 1.6;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .info-slide {
          animation: slideLeftFade 1.5s ease forwards;
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        @keyframes slideLeftFade {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Skill card bounce */
        .skill-card-bounce {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          background: #111;
          border-radius: 15px;
          padding: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          color: #eee;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .progress-fill-animation {
          animation: fillProgress 1.5s ease forwards;
        }

        @keyframes fillProgress {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* Achievements fade and slide */
        .achievements-fade {
          animation: fadeInUp 1.5s ease forwards;
          margin-top: 40px;
          color: #eee;
        }

        .achievement-card-slide {
          animation: slideUpFade 1.2s ease forwards;
          background: #111;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 30px #0077ff44;
          text-align: center;
          color: #61dafb;
          user-select: none;
        }

        .achievement-icon-bounce {
          font-size: 36px;
          animation: bounce 2s infinite ease-in-out;
          margin-bottom: 10px;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Section title glow */
        .section-title-glow {
          font-weight: 800;
          font-size: 2rem;
          color: #61dafb;
          text-shadow: 0 0 10px #61dafb88, 0 0 20px #21a1f188;
          margin-bottom: 20px;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    color: '#eee',
    padding: '40px 20px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  backgroundOverlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: 6,
    height: 6,
    backgroundColor: '#61dafb',
    borderRadius: '50%',
    opacity: 0.5,
    filter: 'drop-shadow(0 0 6px #61dafb)'
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    transition: 'opacity 1s ease, transform 1s ease',
  },
  title: {
    fontSize: '3rem',
  },
  titleUnderline: {
    height: 5,
    margin: '10px auto 0',
    borderRadius: 3,
  },
  content: {
    display: 'flex',
    gap: 30,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  personalCard: {
    flex: '1 1 350px',
    backgroundColor: 'rgba(20, 20, 20, 0.85)',
    borderRadius: 15,
    padding: 30,
    boxShadow: '0 10px 30px #0077ff44',
    color: '#eee',
    position: 'relative',
    overflow: 'visible',
    maxWidth: 450,
  },
  cardGlow: {
    position: 'absolute',
    inset: -10,
    background: 'radial-gradient(circle at center, #61dafb88, transparent)',
    filter: 'blur(20px)',
    opacity: 0.6,
    pointerEvents: 'none',
    borderRadius: 15,
    zIndex: 0,
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #21a1f1, #61dafb)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 28,
    boxShadow: '0 0 20px #61dafb99',
    userSelect: 'none',
  },
  avatarText: {
    userSelect: 'none',
  },
  avatarGlow: {
    position: 'absolute',
    inset: '-10px',
    borderRadius: '50%',
    boxShadow: '0 0 20px #61dafbcc',
    filter: 'blur(6px)',
    pointerEvents: 'none',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: '1.8rem',
    margin: 0,
    color: '#61dafb',
  },
  role: {
    fontSize: '1.1rem',
    marginTop: 4,
    color: '#aaa',
    fontWeight: '600',
  },
  aboutText: {
    marginTop: 20,
    fontSize: '1rem',
    lineHeight: 1.5,
    color: '#ccc',
  },
  infoGrid: {
    marginTop: 25,
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    marginBottom: 12,
  },
  infoIcon: {
    fontSize: 24,
     color: '#61dafb',
    userSelect: 'none',
  },
  infoTitle: {
    margin: 0,
    fontWeight: '700',
    color: '#61dafb',
  },
  infoDesc: {
    margin: 0,
    fontWeight: '400',
    color: '#ccc',
  },
  skillsSection: {
    flex: '1 1 350px',
    maxWidth: 600,
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: 25,
    fontWeight: 700,
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: 20,
  },
  skillCard: {
    backgroundColor: '#111',
    borderRadius: 15,
    padding: 15,
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    color: '#eee',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  skillHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  skillIcon: {
    fontSize: 24,
    userSelect: 'none',
  },
  skillName: {
    fontWeight: '700',
    fontSize: 18,
  },
  skillProgress: {
    marginTop: 15,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  progressBg: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#222',
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
    width: '0%',
    backgroundColor: '#61dafb',
    transition: 'width 1.5s ease',
  },
  skillLevel: {
    fontWeight: '600',
    color: '#61dafb',
    fontSize: 14,
    minWidth: 35,
    textAlign: 'right',
    userSelect: 'none',
  },
  achievementsSection: {
    maxWidth: 1200,
    marginTop: 40,
  },
  achievementsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
  },
  achievementCard: {
    flex: '1 1 180px',
    backgroundColor: '#111',
    borderRadius: 15,
    padding: 20,
    boxShadow: '0 10px 30px #0077ff44',
    color: '#61dafb',
    textAlign: 'center',
    userSelect: 'none',
    transition: 'transform 0.3s ease',
  },
  achievementIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  achievementTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },
  achievementDesc: {
    fontWeight: '400',
    color: '#99cfff',
  }
};

export default About;
