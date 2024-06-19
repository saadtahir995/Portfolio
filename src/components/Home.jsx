import React,{useState} from 'react';
import '../style/Home.css';
import {TiWeatherPartlySunny,TiPencil,TiInputCheckedOutline} from 'react-icons/ti';
import {BsGithub} from 'react-icons/bs';
import ContactForm from './ContactForm';
import { useMediaQuery } from 'react-responsive';
import MobileHome from './MobileHome';
import { BiCameraMovie } from "react-icons/bi";
import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkReaderEnabled
} from 'darkreader';
import { Link } from 'react-scroll';
import Footer from './Footer';
import { CSSTransition } from 'react-transition-group';



const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isDarkMode, setDarkMode] = useState(isDarkReaderEnabled());
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  React.useEffect(() => {
    setShowIntro(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };
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
    {isDarkMode ? <MdOutlineLightMode size={30} style={{marginLeft:'95%'}} className="dark-mode-icon" onClick={() =>{ disableDarkMode()
      setDarkMode(!isDarkMode)}} /> : <MdOutlineDarkMode size={30} className="dark-mode-icon" style={{marginLeft:'95%'}} onClick={() =>{ enableDarkMode({
    brightness: 100,
    contrast: 90,
    sepia: 10,})
    setDarkMode(!isDarkMode)
    }} />}
    </div>
  {isMobile ? <MobileHome/> : (<>

    <div className="portfolio-container">
    <a href="https://github.com/saadtahir995" target="_blank"
                  rel="noopener noreferrer"><BsGithub size={50} style={{marginLeft:'7%',marginBottom:'6%',color:'black'}}/></a>

<CSSTransition in={showIntro} appear={true} timeout={1000} classNames="intro">
        <div className="intro">
          <h1 className="intro-title">Hi, I'm Saad</h1>
          <p className='intro-text'>Welcome to my portfolio!<br />I'm a passionate web developer with a strong focus on creating engaging and user-friendly experiences.</p>
        </div>
      </CSSTransition>

      <div className="section projects">
        <h1 className="section-title">Projects</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg project-card">
              <div className="card-body">
                <h2 className="card-title">Weather App</h2>
                <div className="project-icon">
                  <TiWeatherPartlySunny size={150} className="project-icon" />
                </div>
                <p className="card-text">
                  The Weather App provides instant weather updates for cities worldwide.
                  Users can search for cities and get real-time data.
                </p>
                <a
                  href="https://weather-app-eight-zeta-22.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Go to Project Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg project-card">
              <div className="card-body">
                <h2 className="card-title">Blog App</h2>
                <div className="project-icon">
                  <TiPencil size={150} className="project-icon" />
                </div>
                <p className="card-text">
                  A blog website created using MERN stack for writing and sharing articles.
                  Users can create accounts, write articles, and interact with comments.
                </p>
                <a
                  href="https://blog-app-frontend-sandy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Go to Project Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-lg project-card">
              <div className="card-body">
                <h2 className="card-title">Movies Website</h2>
                <div className="project-icon">
                  <BiCameraMovie 
                  size={150} className="project-icon" />
                </div>
                <p className="card-text">
                  A simple movie website based on yts api watch all your favourite movies here for free.
                </p>
                <a
                  href="https://moviedb-teal-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Go to Project Website
                </a>
              </div>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
      <div className="section skills">
        <h2 className='section-title'>Skills</h2>
        <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="50" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="50" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="50" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="50" alt="php logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="50" alt="cplusplus logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="50" alt="c logo"  />
</div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySql</li>
          <li>C</li>
          <li>C++</li>
          <li>Responsive Design</li>
        </ul>
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
        <div align="left" style={{marginLeft:'25%'}}>
  <a href="https://www.instagram.com/saadtahir69/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="instagram logo" style={{marginRight:'2%'}}  />
  </a>
  <a href="https://discord.com/users/501817871790505994" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="discord logo" style={{marginRight:'2%'}}  />
  </a>
  <a href="https://www.linkedin.com/in/saad-tahir-384ab81a7" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo"  />
  </a>
</div>
</div>

      <div className="section contact">
        <ContactForm/>
      </div>
    </div>
    </>)}
    <Footer/>
    </>
  );
};

export default Home;
