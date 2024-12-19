import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import {
  FaCalendarAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaHandsHelping,
  FaHeart,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaCertificate,
  // FaQuoteLeft,
  // FaEthereum,
  FaCube,
  FaChartLine,
  FaCheckCircle,
  FaRocket
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 8%',
      background: isScrolled ? 'rgba(13, 10, 28, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#fff',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <FaCube style={{ color: '#6366f1' }} />
          Voluntry
        </a>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="/about" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '800'
          }}>About</a>
          <a href="/events" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '800'
          }}>Events</a>
          <a href="/contact" style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '800'
          }}>Contact</a>

          <button
            onClick={() => setActiveModal('signIn')}
            style={{
              background: 'transparent',
              background: "rgba(255, 255, 255, 0.1)",
              padding: '0.5rem 1.5rem',
              borderRadius: '24px',
              color: '#fff',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              marginRight: '0.5rem',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Sign In
          </button>

          <button
            onClick={() => setActiveModal('register')}
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              border: 'none',
              padding: '0.5rem 1.5rem',
              borderRadius: '24px',
              color: '#fff',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              fontWeight: 'bold',
              boxShadow: "0 10px 20px rgba(99, 102, 241, 0.5)",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Volunteer
          </button>
        </nav>
      </div>

      <Modal show={activeModal === 'signIn'} onHide={() => setActiveModal(null)} centered>
        <LoginForm closeModal={() => setActiveModal(null)} />
      </Modal>

      <Modal show={activeModal === 'register'} onHide={() => setActiveModal(null)} centered>
        <RegisterForm closeModal={() => setActiveModal(null)} />
      </Modal>
    </header>
  );
};


const Hero = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f1033 0%, #2b1f5c 100%)",
        height: "100vh", // Change to desired height (e.g., 80% of the viewport height)
        padding: "8rem 15%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "left",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/1001376547.mp4"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)",
          filter: "blur(100px)",
          animation: "spin-reverse 25s linear infinite",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "50%",
          marginRight: "2rem",
        }}
      >
        {/* Heading and Subheading */}
        <h1
          style={{
            fontSize: "4.5rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "2rem",
            animation: "fade-in 1.5s ease forwards",
            opacity: 0,
          }}
        >
          Make a Difference Through Volunteering
        </h1>
        <p
          style={{
            fontSize: "1.65rem",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "2rem",
            animation: "fade-in 2s ease forwards",
            opacity: 0,
          }}
        >
          Connect with meaningful opportunities and create positive change in
          your community.
        </p>

        {/* Call-to-Actions */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "1rem",
            animation: "fade-in 2.5s ease forwards",
            opacity: 0,
          }}
        >
          <button
  style={{
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    border: "none",
    padding: "1rem 4rem",
    borderRadius: "24px",
    color: "#fff",
    fontSize: "2rem",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    fontWeight: "600",
    boxShadow: "0 10px 20px rgba(99, 102, 241, 0.5)",
  }}
  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
  onClick={() => window.location.href = "/register-organizer"} // Navigate on click
>
  Organizer
</button>

          <button
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "1rem 2rem",
              borderRadius: "24px",
              color: "#fff",
              fontSize: "2rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontWeight: "500",
            }}
            onMouseOver={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.3)")}
            onMouseOut={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.1)")}
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "4rem",
            marginTop: "4rem",
            flexWrap: "wrap",
            animation: "fade-in 3s ease forwards",
            opacity: 0,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              $4,200,368
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "1rem",
              }}
            >
              All-time help value
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              10,434
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "1rem",
              }}
            >
              Total volunteers
            </p>
          </div>
        </div>
      </div>

      {/* Illustration */}
      <div
        style={{
          position: "relative",
          width: "45%",
          maxWidth: "600px",
          animation: "float 6s ease-in-out infinite",
        }}
      >
        <img
          src="/heroImageVolunteer.avif"
          alt="Volunteering"
          style={{
            width: "150%",
            height: "120%",
            borderRadius: "24px",
            boxShadow: "none",
            background: "transparent",
            paddingTop:"100px"
          }}
        />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes spin-reverse {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};



const Features = () => {
  const features = [
    { icon: FaHandsHelping, title: "Smart Matching", description: "AI-powered system connects you with perfect opportunities." },
    { icon: FaCalendarAlt, title: "Flexible Scheduling", description: "Choose opportunities that fit your schedule." },
    { icon: FaHeart, title: "Impact Tracking", description: "Monitor your contributions with detailed analytics." },
    { icon: FaStar, title: "Recognition Program", description: "Earn badges and rewards for your contributions." },
    { icon: FaShieldAlt, title: "Verified Organizations", description: "Connect with thoroughly vetted non-profits." },
    { icon: FaCertificate, title: "Skill Development", description: "Access training resources and certifications." },
    { icon: FaUsers, title: "Community Support", description: "Join a community of like-minded volunteers." },
    { icon: FaChartLine, title: "Growth Analytics", description: "Track your volunteering growth over time." }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f1033 0%, #1a1b4b 100%)',
      padding: '8rem 8%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
        zIndex: 1
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '4rem',
          animation: 'fade-in-down 1s ease',
          textShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
        }}>
          Why Choose Voluntry?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: hoveredIndex === index ? '40px' : '30px',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: `slide-in 0.5s ease ${index * 0.1}s forwards`,
                opacity: 0,
                transform: hoveredIndex === index ? 'translateY(-15px) scale(1.05)' : 'translateY(0) scale(1)',
                boxShadow: hoveredIndex === index ? '0 20px 40px rgba(99, 102, 241, 0.3)' : '0 10px 20px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.4s ease'
              }} />

              <div style={{ 
                position: 'relative', 
                zIndex: 2,
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.4s ease'
              }}>
                <feature.icon style={{
                  fontSize: '3rem',
                  color: '#6366f1',
                  marginBottom: '1.5rem',
                  animation: hoveredIndex === index ? 'icon-pulse 1s ease-in-out infinite' : 'none',
                  filter: hoveredIndex === index ? 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.7))' : 'none'
                }} />
                <h3 style={{
                  fontSize: '1.75rem',
                  color: '#fff',
                  marginBottom: '1rem',
                  fontWeight: 'bold'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes icon-pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </section>
  );
};


const SubscriptionPlans = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const plans = [
    {
      title: "Starter Plan",
      price: "$25",
      duration: "Monthly",
      icon: FaRocket,
      features: [
        "List up to 5 events per month",
        "Basic volunteer management",
        "Standard email support",
      ]
    },
    {
      title: "Growth Plan",
      price: "$65",
      duration: "Monthly",
      icon: FaChartLine,
      features: [
        "Unlimited event listings",
        "Priority listing of events",
        "Marketing support"
      ]
    },
    {
      title: "Enterprise Plan",
      price: "$120",
      duration: "Monthly",
      icon: FaStar,
      features: [
        "Dedicated account manager",
        "Custom branding for events",
        "Customizable workflows"
      ]
    }
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0a0b24 0%, #1a1b4b 100%)',
      padding: '8rem 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        animation: 'pulse 8s infinite'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '3rem',
          animation: 'fade-in 1s ease',
          textShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
        }}>
          Choose Your Plan
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: hoveredIndex === index ? '30px 60px 30px 60px' : '46px',
                padding: '4rem',
                border: `6px solid ${hoveredIndex === index ? '#6366f1' : 'rgba(255, 255, 255, 0.2)'}`,
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredIndex === index ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `slide-in-up 0.5s ease ${index * 0.2}s forwards`,
                opacity: 0,
                boxShadow: hoveredIndex === index ? '0 20px 40px rgba(99, 102, 241, 0.3)' : '0 8px 15px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.4s ease'
              }} />

              <div style={{ 
                position: 'relative', 
                zIndex: 2,
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.4s ease'
              }}>
                <plan.icon style={{
                  fontSize: '3rem',
                  color: '#6366f1',
                  marginBottom: '1.5rem',
                  display: 'block',
                  margin: '0 auto',
                  animation: hoveredIndex === index ? 'icon-bounce 0.6s ease infinite' : 'none'
                }} />
                <h3 style={{
                  fontSize: '2rem',
                  color: '#fff',
                  marginBottom: '1rem',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  {plan.title}
                </h3>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#6366f1',
                  marginBottom: '0.5rem',
                  textAlign: 'center',
                  textShadow: '0 0 10px rgba(99, 102, 241, 0.5)'
                }}>
                  {plan.price}
                </div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '2rem',
                  textAlign: 'center',
                  fontSize: '1.1rem'
                }}>
                  {plan.duration}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 2rem 0'
                }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '1.1rem'
                    }}>
                      <FaCheckCircle style={{ 
                        color: '#6366f1', 
                        fontSize: '1.25rem',
                        animation: hoveredIndex === index ? 'icon-pulse 1s ease infinite' : 'none'
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  padding: '1.25rem',
                  borderRadius: '42px',
                  color: '#fff',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 15px rgba(99, 102, 241, 0.4)'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(99, 102, 241, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.4)';
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slide-in-up {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes icon-bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes icon-pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 2.5rem;
            }
          }

          @media (max-width: 480px) {
            h2 {
              font-size: 2rem;
              margin-bottom: 2rem;
            }
            button {
              font-size: 1rem;
              padding: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};




// FAQ Section
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is Voluntry?",
      answer: "Voluntry is a platform that connects volunteers with meaningful opportunities to make a difference in their communities."
    },
    {
      question: "How do I register as a volunteer?",
      answer: "Simply click the 'Volunteer' button at the top right of the page, fill in the required details, and start exploring opportunities!"
    },
    {
      question: "Is there a cost to using Voluntry?",
      answer: "Signing up as a volunteer is free. However, organizations may choose subscription plans for additional features."
    },
    {
      question: "Can I organize events on Voluntry?",
      answer: "Yes! You can register as an organizer and use our tools to create and manage events."
    },
    {
      question: "How does the platform ensure verified opportunities?",
      answer: "We thoroughly vet every organization to ensure opportunities are legitimate and impactful."
    }
  ];

  return (
    <section style={{
      background: '#0f1033',
      padding: '8rem 8%',
      position: 'relative'
    }}>
            {/* Background Video */}
            <video
        autoPlay
        loop
        muted
        playsInline
        src="/1001376547.mp4"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '4rem',
          animation: 'fade-in 1s ease'
        }}>
          Frequently Asked Questions
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: activeIndex === index ? '2px solid #6366f1' : '2px solid rgba(255, 255, 255, 0.1)',
                transition: 'border 0.3s ease, transform 0.3s ease',
                boxShadow: activeIndex === index ? '0 8px 20px rgba(99, 102, 241, 0.6)' : '0 4px 10px rgba(0, 0, 0, 0.2)',
                transform: activeIndex === index ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1.1rem'
                }}
              >
                <span>{faq.question}</span>
                <span style={{
                  color: '#6366f1',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease'
                }}>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              <div
                style={{
                  padding: activeIndex === index ? '1rem 1.5rem' : '0 1.5rem',
                  maxHeight: activeIndex === index ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  color: 'rgba(255, 255, 255, 0.7)',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};


// Footer Component
const Footer = () => {
  return (
    <footer
      style={{
        background: "#0a0b24",
        padding: "6rem 8% 2rem",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Animation */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, #6366f1, transparent)",
          filter: "blur(100px)",
          animation: "pulse 6s infinite",
          zIndex: 1
        }}
      ></div>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "4rem",
          position: "relative",
          zIndex: 2
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "transform 0.3s ease"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            <FaCube style={{ color: "#6366f1" }} />
            Voluntry
          </h3>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
              marginBottom: "2rem"
            }}
          >
            Connecting volunteers with meaningful opportunities to make a difference in their communities.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    border: "2px solid transparent",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#6366f1";
                    e.target.style.borderColor = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.borderColor = "transparent";
                  }}
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["About", "Events", "Contact", "FAQ"].map((item, index) => (
              <li key={index} style={{ marginBottom: "0.75rem" }}>
                <a
                  href="#"
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    transition: "color 0.3s ease"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#6366f1")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(255, 255, 255, 0.7)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Newsletter</h4>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "1.5rem"
            }}
          >
            Subscribe to stay updated with our latest opportunities
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff",
                outline: "none",
                transition: "border-color 0.3s ease"
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.2)")}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          marginTop: "4rem",
          paddingTop: "2rem",
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.7)",
          position: "relative",
          zIndex: 2
        }}
      >
        <p>© 2024 Voluntry. All rights reserved.</p>
      </div>

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        `}
      </style>
    </footer>
  );
};


const App = () => {
  return (
    <div style={{ background: '#0f1033' }}>
      <Header />
      <Hero />
      <Features />
      <SubscriptionPlans />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;

