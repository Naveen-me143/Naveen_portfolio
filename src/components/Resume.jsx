import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('education');
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const resumeData = {
    personal: {
      name: "DASARI NAVEEN",
      title: "INNOVATOR || FAST LEARNER || PROBLEM SOLVER",
      contact: {
        mobile: "+91 9110563667",
        email: "dasarinaveen890@gmail.com",
        location: "Hyderabad, Telangana"
      }
    },
    objective: "A dedicated and results-driven professional seeking to land in a job that offers a stimulating learning environment for developing and putting into practice new ideas for the company's development.",
    education: [
      {
        degree: "B.TECH (ECE)",
        institution: "JBIET (HYD)",
        year: "2025",
        grade: "8.21 SGPA",
        icon: "🎓"
      },
      {
        degree: "INTER (MPC)",
        institution: "KAVITHA JUNIOR (SRPT)",
        year: "2021",
        grade: "8.86 CGPA",
        icon: "📚"
      },
      {
        degree: "SSC",
        institution: "T.G MODEL SCHOOL (SRPT)",
        year: "2019",
        grade: "8.88 CGPA",
        icon: "🏫"
      }
    ],
    skills: {
      programming: ["HTML", "CSS", "JavaScript", "React", "SQL"],
      office: ["MS Word", "PowerPoint", "MS Excel", "Fast Typing"],
      soft: ["Problem Solving", "Leadership Qualities", "Team Management"]
    },
    projects: [
      {
        type: "MINI PROJECT",
        name: "E-Commerce Platform",
        icon: "🛒"
      },
      {
        type: "MAJOR PROJECT",
        name: "CNN Based Emotion Mapping System",
        icon: "🧠"
      }
    ],
    achievements: [
      "5 days boot camp on Cyber Security",
      "Arduino Prototyping by Home Automation",
      "Great achievement in NCC -B(Certificate)",
      "Online Internships on EXCELR, JSPIDERS"
    ],
    strengths: [
      "Team management, teamwork",
      "Self-confidence, self-motivation, smart work",
      "Ability to learn things quickly",
      "Positive thinker"
    ],
    hobbies: ["Feeling Nature", "Listening Music", "Playing Cricket"]
  };

  const sections = [
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'strengths', label: 'Strengths', icon: '💪' }
  ];

  const generatePDF = () => {
    setIsDownloading(true);
    
    // Create a new window for PDF generation
    const printWindow = window.open('', '_blank');
    
    const pdfContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${resumeData.personal.name} - Resume</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                background: white;
                padding: 20px;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .header {
                text-align: center;
                border-bottom: 3px solid #3b82f6;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            
            .name {
                font-size: 28px;
                font-weight: bold;
                color: #1a1a3e;
                margin-bottom: 8px;
                letter-spacing: 1px;
            }
            
            .title {
                font-size: 16px;
                color: #3b82f6;
                margin-bottom: 15px;
                font-weight: 600;
            }
            
            .contact-info {
                display: flex;
                justify-content: center;
                gap: 25px;
                flex-wrap: wrap;
                font-size: 14px;
                color: #666;
            }
            
            .section {
                margin-bottom: 25px;
            }
            
            .section-title {
                font-size: 18px;
                font-weight: bold;
                color: #1a1a3e;
                border-bottom: 2px solid #3b82f6;
                padding-bottom: 5px;
                margin-bottom: 15px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .objective-text {
                font-size: 14px;
                line-height: 1.7;
                color: #555;
                text-align: justify;
                padding: 15px;
                background: #f8fafc;
                border-left: 4px solid #3b82f6;
                border-radius: 0 8px 8px 0;
            }
            
            .education-item, .project-item {
                margin-bottom: 15px;
                padding: 12px;
                background: #f8fafc;
                border-radius: 8px;
                border-left: 4px solid #3b82f6;
            }
            
            .education-degree, .project-name {
                font-size: 16px;
                font-weight: bold;
                color: #1a1a3e;
                margin-bottom: 5px;
            }
            
            .education-institution {
                font-size: 14px;
                color: #666;
                margin-bottom: 5px;
            }
            
            .education-details {
                font-size: 13px;
                color: #3b82f6;
                font-weight: 600;
            }
            
            .project-type {
                font-size: 12px;
                color: #8b5cf6;
                font-weight: 600;
                text-transform: uppercase;
                margin-bottom: 3px;
            }
            
            .skills-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
            }
            
            .skill-category {
                background: #f8fafc;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #3b82f6;
            }
            
            .skill-category-title {
                font-size: 14px;
                font-weight: bold;
                color: #1a1a3e;
                margin-bottom: 10px;
                text-transform: uppercase;
            }
            
            .skill-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .skill-tag {
                background: #3b82f6;
                color: white;
                padding: 5px 12px;
                border-radius: 15px;
                font-size: 12px;
                font-weight: 500;
            }
            
            .list-item {
                margin-bottom: 8px;
                padding-left: 20px;
                position: relative;
                font-size: 14px;
                color: #555;
                line-height: 1.5;
            }
            
            .list-item:before {
                content: "•";
                color: #3b82f6;
                font-weight: bold;
                position: absolute;
                left: 0;
                font-size: 16px;
            }
            
            .hobbies-list {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
            }
            
            .hobby-item {
                background: #e0f2fe;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 14px;
                color: #0369a1;
                font-weight: 500;
            }
            
            @media print {
                body { 
                    padding: 0; 
                    font-size: 12px;
                }
                .section { 
                    page-break-inside: avoid; 
                    margin-bottom: 20px;
                }
                .name { font-size: 24px; }
                .section-title { font-size: 16px; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1 class="name">${resumeData.personal.name}</h1>
            <p class="title">${resumeData.personal.title}</p>
            <div class="contact-info">
                <span>📱 ${resumeData.personal.contact.mobile}</span>
                <span>📧 ${resumeData.personal.contact.email}</span>
                <span>📍 ${resumeData.personal.contact.location}</span>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Objective</h2>
            <p class="objective-text">${resumeData.objective}</p>
        </div>

        <div class="section">
            <h2 class="section-title">Education</h2>
            ${resumeData.education.map(edu => `
                <div class="education-item">
                    <div class="education-degree">${edu.degree}</div>
                    <div class="education-institution">${edu.institution}</div>
                    <div class="education-details">${edu.year} | ${edu.grade}</div>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3 class="skill-category-title">Programming</h3>
                    <div class="skill-tags">
                        ${resumeData.skills.programming.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">Office Suite</h3>
                    <div class="skill-tags">
                        ${resumeData.skills.office.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">Soft Skills</h3>
                    <div class="skill-tags">
                        ${resumeData.skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Projects</h2>
            ${resumeData.projects.map(project => `
                <div class="project-item">
                    <div class="project-type">${project.type}</div>
                    <div class="project-name">${project.name}</div>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2 class="section-title">Achievements</h2>
            ${resumeData.achievements.map(achievement => `
                <div class="list-item">${achievement}</div>
            `).join('')}
        </div>

        <div class="section">
            <h2 class="section-title">Strengths</h2>
            ${resumeData.strengths.map(strength => `
                <div class="list-item">${strength}</div>
            `).join('')}
        </div>

        <div class="section">
            <h2 class="section-title">Hobbies</h2>
            <div class="hobbies-list">
                ${resumeData.hobbies.map(hobby => `<span class="hobby-item">${hobby}</span>`).join('')}
            </div>
        </div>
    </body>
    </html>`;

    printWindow.document.write(pdfContent);
    printWindow.document.close();
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
        setIsDownloading(false);
      }, 500);
    };
  };

  const EducationSection = () => (
    <div style={styles.sectionContent}>
      {resumeData.education.map((edu, index) => (
        <div
          key={index}
          style={{
            ...styles.educationCard,
            animationDelay: `${index * 0.2}s`
          }}
          className="education-slide"
        >
          <div style={styles.eduIcon} className="bounce-icon">
            {edu.icon}
          </div>
          <div style={styles.eduContent}>
            <h4 style={styles.eduDegree}>{edu.degree}</h4>
            <p style={styles.eduInstitution}>{edu.institution}</p>
            <div style={styles.eduDetails}>
              <span style={styles.eduYear}>{edu.year}</span>
              <span style={styles.eduGrade}>{edu.grade}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const SkillsSection = () => (
    <div style={styles.sectionContent}>
      <div style={styles.skillsGrid}>
        <div style={styles.skillCategory} className="skills-fade-in">
          <h4 style={styles.skillTitle}>Programming</h4>
          <div style={styles.skillTags}>
            {resumeData.skills.programming.map((skill, index) => (
              <span
                key={index}
                style={{
                  ...styles.skillTag,
                  animationDelay: `${index * 0.1}s`
                }}
                className="skill-pop"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div style={styles.skillCategory} className="skills-fade-in">
          <h4 style={styles.skillTitle}>Office Suite</h4>
          <div style={styles.skillTags}>
            {resumeData.skills.office.map((skill, index) => (
              <span
                key={index}
                style={{
                  ...styles.skillTag,
                  animationDelay: `${index * 0.1 + 0.5}s`
                }}
                className="skill-pop"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div style={styles.skillCategory} className="skills-fade-in">
          <h4 style={styles.skillTitle}>Soft Skills</h4>
          <div style={styles.skillTags}>
            {resumeData.skills.soft.map((skill, index) => (
              <span
                key={index}
                style={{
                  ...styles.skillTag,
                  animationDelay: `${index * 0.1 + 1}s`
                }}
                className="skill-pop"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div style={styles.sectionContent}>
      {resumeData.projects.map((project, index) => (
        <div
          key={index}
          style={{
            ...styles.projectCard,
            animationDelay: `${index * 0.3}s`
          }}
          className="project-slide"
        >
          <div style={styles.projectIcon} className="rotate-icon">
            {project.icon}
          </div>
          <div>
            <div style={styles.projectType}>{project.type}</div>
            <h4 style={styles.projectName}>{project.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );

  const AchievementsSection = () => (
    <div style={styles.sectionContent}>
      {resumeData.achievements.map((achievement, index) => (
        <div
          key={index}
          style={{
            ...styles.achievementItem,
            animationDelay: `${index * 0.15}s`
          }}
          className="achievement-slide"
        >
          <span style={styles.achievementBullet} className="pulse-bullet">⭐</span>
          <span>{achievement}</span>
        </div>
      ))}
    </div>
  );

  const StrengthsSection = () => (
    <div style={styles.sectionContent}>
      {resumeData.strengths.map((strength, index) => (
        <div
          key={index}
          style={{
            ...styles.strengthItem,
            animationDelay: `${index * 0.2}s`
          }}
          className="strength-slide"
        >
          <span style={styles.strengthIcon} className="glow-icon">💎</span>
          <span>{strength}</span>
        </div>
      ))}
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'education': return <EducationSection />;
      case 'skills': return <SkillsSection />;
      case 'projects': return <ProjectsSection />;
      case 'achievements': return <AchievementsSection />;
      case 'strengths': return <StrengthsSection />;
      default: return <EducationSection />;
    }
  };

  return (
    <section id="resume" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div 
          style={{
            ...styles.header,
            transform: `translateY(${isVisible ? 0 : 50}px)`,
            opacity: isVisible ? 1 : 0,
          }}
          className="header-animation"
        >
          <h2 style={styles.title} className="gradient-title">
            Resume & CV
          </h2>
          <div style={styles.titleUnderline} className="expanding-line" />
          
          <div style={styles.personalInfo} className="personal-fade-in">
            <h3 style={styles.name} className="name-glow">
              {resumeData.personal.name}
            </h3>
            <p style={styles.subtitle} className="typewriter-subtitle">
              {resumeData.personal.title}
            </p>
            <div style={styles.contactInfo}>
              <span style={styles.contactItem}>📱 {resumeData.personal.contact.mobile}</span>
              <span style={styles.contactItem}>📧 {resumeData.personal.contact.email}</span>
              <span style={styles.contactItem}>📍 {resumeData.personal.contact.location}</span>
            </div>
          </div>

          <div style={styles.objective} className="objective-slide">
            <h4 style={styles.objectiveTitle}>Objective</h4>
            <p style={styles.objectiveText}>{resumeData.objective}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={styles.navigation}>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                ...styles.navButton,
                ...(activeSection === section.id ? styles.navButtonActive : {}),
                animationDelay: `${index * 0.1}s`
              }}
              className="nav-button-slide"
            >
              <span style={styles.navIcon}>{section.icon}</span>
              <span>{section.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={styles.contentArea} className="content-fade">
          {renderActiveSection()}
        </div>

        {/* Download Button */}
        <div style={styles.downloadSection} className="download-fade">
          <button 
            style={{
              ...styles.downloadButton,
              opacity: isDownloading ? 0.7 : 1,
              cursor: isDownloading ? 'not-allowed' : 'pointer'
            }} 
            className="download-pulse"
            onClick={generatePDF}
            disabled={isDownloading}
          >
            <span style={styles.downloadIcon}>
              {isDownloading ? '⏳' : '📄'}
            </span>
            <span>
              {isDownloading ? 'Generating PDF...' : 'Download Full CV'}
            </span>
            <span style={styles.downloadArrow}>↓</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div style={styles.bgElement1} className="floating-bg" />
      <div style={styles.bgElement2} className="floating-bg" />
      <div style={styles.bgElement3} className="floating-bg" />

      <style>{`
        /* Title Animations */
        .gradient-title {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 4s ease infinite;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .expanding-line {
          animation: expandLine 1s ease-out 0.5s forwards;
          width: 0;
        }

        @keyframes expandLine {
          to { width: 100px; }
        }

        /* Personal Info Animations */
        .name-glow {
          animation: nameGlow 3s ease-in-out infinite;
        }

        @keyframes nameGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.5); }
        }

        .typewriter-subtitle {
          overflow: hidden;
          border-right: 2px solid #3b82f6;
          white-space: nowrap;
          animation: typing 3s steps(30) 1s forwards, blink 1s infinite 4s;
          width: 0;
        }

        @keyframes typing {
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        .personal-fade-in {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .objective-slide {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInRight 1s ease-out 1s forwards;
        }

        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Navigation Animations */
        .nav-button-slide {
          opacity: 0;
          transform: translateY(30px);
          animation: navSlideUp 0.6s ease-out forwards;
        }

        @keyframes navSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Education Animations */
        .education-slide {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s ease-out forwards;
        }

        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .bounce-icon {
          animation: bounceIcon 2s ease-in-out infinite;
        }

        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        /* Skills Animations */
        .skills-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .skill-pop {
          opacity: 0;
          transform: scale(0);
          animation: skillPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes skillPop {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Project Animations */
        .project-slide {
          opacity: 0;
          transform: translateY(30px);
          animation: projectSlide 0.8s ease-out forwards;
        }

        @keyframes projectSlide {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rotate-icon {
          animation: rotateIcon 3s linear infinite;
        }

        @keyframes rotateIcon {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Achievements Animations */
        .achievement-slide {
          opacity: 0;
          transform: translateX(50px);
          animation: achievementSlide 0.6s ease-out forwards;
        }

        @keyframes achievementSlide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .pulse-bullet {
          animation: pulseBullet 2s ease-in-out infinite;
        }

        @keyframes pulseBullet {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        /* Strengths Animations */
        .strength-slide {
          opacity: 0;
          transform: scale(0.8);
          animation: strengthSlide 0.8s ease-out forwards;
        }

        @keyframes strengthSlide {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .glow-icon {
          animation: glowIcon 2s ease-in-out infinite;
        }

        @keyframes glowIcon {
          0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.8));
          }
        }

        /* Download Button */
        .download-pulse {
          animation: downloadPulse 2s ease-in-out infinite;
        }

        @keyframes downloadPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
          }
        }

        .download-pulse:hover {
          transform: translateY(-3px) !important;
          animation-play-state: paused;
        }

        /* Background Elements */
        .floating-bg {
          animation: floatBg 8s ease-in-out infinite;
        }

        .floating-bg:nth-child(2) {
          animation-delay: -2s;
        }

        .floating-bg:nth-child(3) {
          animation-delay: -4s;
        }

        @keyframes floatBg {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.7;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .typewriter-subtitle {
            animation: none !important;
            width: 100% !important;
            border: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '15px',
  },
  titleUnderline: {
    height: '4px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    margin: '0 auto 40px',
    borderRadius: '2px',
  },
  personalInfo: {
    marginBottom: '40px',
    transform: 'translateY(20px)',
  },
  name: {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#e2e8f0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    marginBottom: '25px',
    maxWidth: '600px',
    margin: '0 auto 25px',
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  contactItem: {
    fontSize: '1rem',
    color: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  objective: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '25px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateX(-50px)',
  },
  objectiveTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#3b82f6',
  },
  objectiveText: {
    fontSize: '1.05rem',
    lineHeight: '1.6',
    color: '#cbd5e1',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '25px',
    color: '#cbd5e1',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
    transform: 'translateY(30px)',
  },
  navButtonActive: {
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    color: 'white',
    borderColor: 'transparent',
    transform: 'translateY(0) scale(1.05)',
  },
  navIcon: {
    fontSize: '1.1rem',
  },
  contentArea: {
    minHeight: '400px',
    marginBottom: '50px',
  },
  sectionContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  // Education Styles
  educationCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateX(-50px)',
  },
  eduIcon: {
    fontSize: '2.5rem',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    flexShrink: 0,
  },
  eduContent: {
    flex: 1,
  },
  eduDegree: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#e2e8f0',
  },
  eduInstitution: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    marginBottom: '10px',
  },
  eduDetails: {
    display: 'flex',
    gap: '20px',
  },
  eduYear: {
    fontSize: '0.95rem',
    color: '#3b82f6',
    fontWeight: '600',
  },
  eduGrade: {
    fontSize: '0.95rem',
    color: '#10b981',
    fontWeight: '600',
  },
  // Skills Styles
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  skillCategory: {
    padding: '25px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  skillTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#3b82f6',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skillTag: {
    padding: '8px 16px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'white',
    transform: 'scale(0)',
  },
  // Projects Styles
  projectCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '25px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transform: 'translateY(30px)',
  },
  projectIcon: {
    fontSize: '3rem',
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #10b981, #3b82f6)',
    borderRadius: '50%',
    flexShrink: 0,
  },
  projectType: {
    fontSize: '0.9rem',
    color: '#3b82f6',
    fontWeight: '600',
    marginBottom: '5px',
  },
  projectName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#e2e8f0',
  },
  // Achievements & Strengths Styles
  achievementItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px 20px',
    marginBottom: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '1.05rem',
    color: '#cbd5e1',
    transform: 'translateX(50px)',
  },
  achievementBullet: {
    fontSize: '1.2rem',
    flexShrink: 0,
  },
  strengthItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '15px 20px',
    marginBottom: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    fontSize: '1.05rem',
    color: '#cbd5e1',
    transform: 'scale(0.8)',
  },
  strengthIcon: {
    fontSize: '1.3rem',
    flexShrink: 0,
  },
  // Download Section
  downloadSection: {
    textAlign: 'center',
  },
  downloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '18px 35px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  downloadIcon: {
    fontSize: '1.3rem',
  },
  downloadArrow: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  // Background Elements
  bgElement1: {
    position: 'absolute',
    top: '15%',
    left: '5%',
    width: '80px',
    height: '80px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
  bgElement2: {
    position: 'absolute',
    top: '60%',
    right: '8%',
    width: '60px',
    height: '60px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
  bgElement3: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: '100px',
    height: '100px',
    background: 'rgba(6, 182, 212, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
};

export default Resume;