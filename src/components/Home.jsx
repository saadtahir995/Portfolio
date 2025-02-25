import React,{useState} from 'react';
import '../style/Home.css';
import {TiWeatherPartlySunny,TiPencil,TiInputCheckedOutline} from 'react-icons/ti';
import {BsGithub} from 'react-icons/bs';
import ContactForm from './ContactForm';
import { BiCameraMovie, BiMessageSquareDetail } from "react-icons/bi";
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkReaderEnabled
} from 'darkreader';
import { Link } from 'react-scroll';
import Footer from './Footer';
import { CSSTransition } from 'react-transition-group';
import { FaDatabase, FaGitAlt, FaNodeJs, FaServer, FaPlug } from 'react-icons/fa';
import { SiNestjs, SiPostgresql, SiMongodb, SiPrisma, SiTypescript, SiMui, SiTailwindcss, SiPostman, SiDocker, SiNginx, SiVisualstudiocode, SiVercel } from 'react-icons/si';



const Home = () => {
  const [isDarkMode, setDarkMode] = useState(isDarkReaderEnabled());
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  React.useEffect(() => {
    setShowIntro(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "react", level: 90 },
        { name: "TypeScript", icon: SiTypescript, level: 85 },
        { name: "JavaScript", icon: "javascript", level: 95 },
        { name: "HTML5", icon: "html5", level: 95 },
        { name: "CSS3", icon: "css3", level: 90 },
        { name: "Material UI", icon: SiMui, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 88 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "NestJS", icon: SiNestjs, level: 80 },
        { name: "Express.js", icon: "express", level: 85 },
        { name: "RESTful APIs", icon: FaServer, level: 90 },
        { name: "Nginx", icon: SiNginx, level: 75 },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
        { name: "MySQL", icon: "mysql", level: 80 },
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "Prisma", icon: SiPrisma, level: 80 },
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt, level: 90 },
        { name: "Docker", icon: SiDocker, level: 80 },
        { name: "Postman", icon: SiPostman, level: 88 },
        { name: "VS Code", icon: SiVisualstudiocode, level: 92 },
      ]
    },
    {
      category: "Deployment & Other",
      skills: [
        { name: "Vercel", icon: SiVercel, level: 85 },
        { name: "WebSockets", icon: FaPlug, level: 75 },
        { name: "Database Design", icon: FaDatabase, level: 85 },
      ]
    }
  ];

  return (<>
  <div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset to fit your layout
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset to fit your layout
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset to fit your layout
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset to fit your layout
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
    </div>
    <div className="dark-mode-toggle">
      {isDarkMode ? (
        <MdOutlineLightMode 
          size={30} 
          className="dark-mode-icon" 
          onClick={() => {
            disableDarkMode();
            setDarkMode(!isDarkMode);
          }} 
        />
      ) : (
        <MdOutlineDarkMode 
          size={30} 
          className="dark-mode-icon" 
          onClick={() => {
            enableDarkMode({
              brightness: 100,
              contrast: 90,
              sepia: 10,
            });
            setDarkMode(!isDarkMode);
          }} 
        />
      )}
    </div>

    <div className="portfolio-container">
    <a href="https://github.com/saadtahir995" target="_blank"
                  rel="noopener noreferrer"><BsGithub size={50} style={{marginLeft:'7%',marginBottom:'6%',color:'black'}}/></a>

<CSSTransition in={showIntro} appear={true} timeout={1000} classNames="intro">
        <div className="intro">
          <h1 className="intro-title">Hi, I'm Saad</h1>
          <p className='intro-text'>Welcome to my portfolio!<br />I'm a passionate web developer with a strong focus on creating engaging and user-friendly experiences.</p>
        </div>
      </CSSTransition>

      <div className="section experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <div className="experience-title-group">
              <h3>Backend Developer</h3>
              <h4>Devntion</h4>
            </div>
            <div className="experience-meta">
              <span className="experience-location">Lahore, PK</span>
              <span className="experience-duration">October 2024 - Present</span>
            </div>
          </div>
          <div className="experience-project">
            <h4>Project: Towing Guy</h4>
            <p className="project-brief">A platform that connects users with towing service providers like Uber</p>
          </div>
          <ul className="experience-responsibilities">
            <li>Developed and maintained backend architecture using NestJS, PostgreSQL, and Prisma.</li>
            <li>Created and optimized APIs for user registration, tow requests, payment processing, and driver management.</li>
            <li>Integrated third-party services for location tracking, payment gateways, and notifications.</li>
            <li>Focused on ensuring scalability, performance, and data security of the system.</li>
            <li>Improved system efficiency through database model optimization and API response enhancements.</li>
          </ul>
          <div className="experience-tech">
            <span>NestJS</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
            <span>REST APIs</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>

      <div className="section projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <TiWeatherPartlySunny className="project-icon" />
                <h3>Weather App</h3>
              </div>
              <p className="project-description">
                The Weather App provides instant weather updates for cities worldwide.
                Users can search for cities and get real-time weather data.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Weather API</span>
              </div>
              <div className="project-links">
                <a
                  href="https://weather-app-eight-zeta-22.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <TiPencil className="project-icon" />
                <h3>Blog App</h3>
              </div>
              <p className="project-description">
                A full-featured blog platform built with MERN stack. Users can create accounts,
                write articles, and interact with comments.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a
                  href="https://blog-app-frontend-sandy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <BiMessageSquareDetail className="project-icon" />
                <h3>Realtime Chat App</h3>
              </div>
              <p className="project-description">
                A real-time chat application built with React, Node.js, and Socket.IO that enables both public and private room
                messaging along with AI-powered chat capabilities using Google's Generative AI (Gemini).
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Socket.IO</span>
                <span>WebSockets</span>
                <span>Google Gemini AI</span>
              </div>
              <div className="project-links">
                <a
                  href="https://chat-chi-ashen-44.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <BiCameraMovie className="project-icon" />
                <h3>Streaming Platform</h3>
              </div>
              <p className="project-description">
                A streaming platform built with TypeScript, React, and RESTful APIs,
                allowing users to watch seasons and episodes of videos.
              </p>
              <div className="project-tech">
                <span>TypeScript</span>
                <span>React</span>
                <span>RESTful APIs</span>
                <span>Node.js</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a
                  href="https://anime-website-mu-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section skills">
        <h2 className='section-title'>Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="skill-item">
                    {typeof skill.icon === 'string' ? (
                      <img 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                        alt={skill.name}
                        className="skill-icon"
                      />
                    ) : (
                      <skill.icon className="skill-icon" />
                    )}
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='section education'> 
        <h2 className='section-title'>Education</h2>
        <p>BS Computer Science</p>
        <p>University of Central Punajb</p>
      </div>
        <div className="section languages">
        <h2 className='section-title'>Languages</h2>
        <p>English</p>
        <p>Urdu</p>
        </div>
        <div className="section interests">
        <h2 className='section-title'>Interests</h2>
        <p>Technology</p>
        <p>Science</p>
        </div>
        <div className='section social'>
        <h2 className='section-title'>Social</h2>
        <div className="social-links">
          <a href="https://github.com/saadtahir995" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=GitHub&logo=github&label=&color=181717&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="github logo" />
          </a>
          <a href="https://discord.com/users/501817871790505994" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="discord logo" />
          </a>
          <a href="https://www.linkedin.com/in/saadtahir69/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo" />
          </a>
        </div>
        </div>

      <div className="section contact">
        <ContactForm/>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
