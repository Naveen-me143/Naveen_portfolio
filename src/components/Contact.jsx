import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInput, setHoveredInput] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'dasarinaveen890@gmail.com', delay: 0.1 },
    { icon: '📱', label: 'Phone', value: '+91 9110563667', delay: 0.2 },
    { icon: '📍', label: 'Location', value: 'Hyderabad, India', delay: 0.3 },
  ];

  const socialLinks = [
    { icon: '🐙', name: 'GitHub', url: 'https://github.com/Naveen-me143?tab=repositories', color: '#333' },
    { icon: '💼', name: 'LinkedIn', url: 'https://www.linkedin.com/in/dasari-naveen-0a87b1281/', color: '#0077b5' },
    { icon: '🐦', name: 'Twitter', url: 'https://x.com/NaveenN63104368?t=2DkRPC0LXUYqujtdB-gpkg&s=09', color: '#1da1f2' },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <div 
          style={{
            ...styles.titleContainer,
            transform: `translateY(${isVisible ? 0 : 50}px)`,
            opacity: isVisible ? 1 : 0,
          }}
          className="title-animation"
        >
          <h2 style={styles.title} className="gradient-title">
            Let's Connect
          </h2>
          <div style={styles.titleUnderline} className="expanding-line" />
        </div>

        <div style={styles.contentGrid}>
          {/* Contact Info - Left Side */}
          <div style={styles.leftSection}>
            <div 
              style={{
                ...styles.infoCard,
                transform: `translateX(${isVisible ? 0 : -50}px)`,
                opacity: isVisible ? 1 : 0,
              }}
              className="info-card-animation"
            >
              <h3 style={styles.sectionTitle} className="pulse-text">
                Get In Touch
              </h3>
              <p style={styles.description}>
                Ready to bring your ideas to life? Let's create something amazing together!
              </p>

              <div style={styles.contactList}>
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.contactItem,
                      animationDelay: `${item.delay}s`,
                    }}
                    className="contact-item-slide"
                  >
                    <span style={styles.contactIcon} className="bounce-icon">
                      {item.icon}
                    </span>
                    <div>
                      <div style={styles.contactLabel}>{item.label}</div>
                      <div style={styles.contactValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={styles.socialContainer}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.socialLink,
                      animationDelay: `${0.5 + index * 0.1}s`,
                    }}
                    className="social-bounce"
                    aria-label={social.name}
                  >
                    <span style={styles.socialIcon}>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div style={styles.rightSection}>
            <div 
              style={{
                ...styles.formContainer,
                transform: `translateX(${isVisible ? 0 : 50}px)`,
                opacity: isVisible ? 1 : 0,
              }}
              className="form-slide-animation"
            >
              {isSubmitted && (
                <div style={styles.successMessage} className="success-popup">
                  <span style={styles.successIcon}>🚀</span>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <div style={styles.form}>
                <div style={styles.inputGroup}>
                  <label htmlFor="name" style={styles.label} className="floating-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setHoveredInput('name')}
                    onBlur={() => setHoveredInput(null)}
                    required
                    style={{
                      ...styles.input,
                      ...(hoveredInput === 'name' ? styles.inputFocused : {}),
                    }}
                    className="animated-input"
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="email" style={styles.label} className="floating-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setHoveredInput('email')}
                    onBlur={() => setHoveredInput(null)}
                    required
                    style={{
                      ...styles.input,
                      ...(hoveredInput === 'email' ? styles.inputFocused : {}),
                    }}
                    className="animated-input"
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label htmlFor="message" style={styles.label} className="floating-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setHoveredInput('message')}
                    onBlur={() => setHoveredInput(null)}
                    required
                    style={{
                      ...styles.textarea,
                      ...(hoveredInput === 'message' ? styles.inputFocused : {}),
                    }}
                    className="animated-input"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  className="pulse-button"
                >
                  <span style={styles.buttonText}>Send Message</span>
                  <span style={styles.buttonIcon}>✨</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div style={styles.floatingElement1} className="floating-bg" />
      <div style={styles.floatingElement2} className="floating-bg" />
      <div style={styles.floatingElement3} className="floating-bg" />

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
          to { width: 80px; }
        }

        .pulse-text {
          animation: textPulse 2s ease-in-out infinite;
        }

        @keyframes textPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        /* Contact Items */
        .contact-item-slide {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.6s ease-out forwards;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bounce-icon {
          animation: bounceIcon 2s ease-in-out infinite;
        }

        @keyframes bounceIcon {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.1); }
        }

        /* Social Links */
        .social-bounce {
          opacity: 0;
          transform: scale(0);
          animation: socialPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes socialPop {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .social-bounce:hover {
          transform: scale(1.2) rotate(10deg);
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Form Animations */
        .animated-input {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .animated-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
        }

        .floating-label {
          transition: all 0.3s ease;
        }

        /* Button Animation */
        .pulse-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .pulse-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .pulse-button:hover:before {
          left: 100%;
        }

        .pulse-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
        }

        .pulse-button:active {
          transform: translateY(-1px);
        }

        /* Success Message */
        .success-popup {
          animation: successSlide 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes successSlide {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
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
          25% { 
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-30px) rotate(270deg);
            opacity: 0.4;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .gradient-title {
            font-size: 2rem !important;
          }
          
          .contact-item-slide, .social-bounce {
            animation-delay: 0s !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 0',
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '70vh',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '50px',
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '10px',
  },
  titleUnderline: {
    height: '4px',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '30px',
    },
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  infoCard: {
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    width: '100%',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#e2e8f0',
  },
  description: {
    fontSize: '1rem',
    color: '#94a3b8',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  contactList: {
    marginBottom: '30px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  contactIcon: {
    fontSize: '1.5rem',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    flexShrink: 0,
  },
  contactLabel: {
    fontSize: '0.9rem',
    color: '#94a3b8',
    fontWeight: '500',
  },
  contactValue: {
    fontSize: '1rem',
    color: '#e2e8f0',
    fontWeight: '600',
  },
  socialContainer: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  socialIcon: {
    fontSize: '1.3rem',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  formContainer: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '30px',
    width: '100%',
    transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  successMessage: {
    background: 'linear-gradient(45deg, #10b981, #34d399)',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: '600',
  },
  successIcon: {
    fontSize: '1.2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#cbd5e1',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    color: '#ffffff',
    backdropFilter: 'blur(10px)',
    outline: 'none',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    color: '#ffffff',
    backdropFilter: 'blur(10px)',
    outline: 'none',
    resize: 'vertical',
    minHeight: '100px',
    boxSizing: 'border-box',
  },
  inputFocused: {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
  },
  submitButton: {
    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  buttonText: {
    fontSize: '1rem',
  },
  buttonIcon: {
    fontSize: '1.1rem',
  },
  floatingElement1: {
    position: 'absolute',
    top: '10%',
    left: '5%',
    width: '60px',
    height: '60px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
  floatingElement2: {
    position: 'absolute',
    top: '60%',
    right: '8%',
    width: '40px',
    height: '40px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
  floatingElement3: {
    position: 'absolute',
    bottom: '20%',
    left: '10%',
    width: '80px',
    height: '80px',
    background: 'rgba(6, 182, 212, 0.1)',
    borderRadius: '50%',
    zIndex: 1,
  },
};

export default Contact;