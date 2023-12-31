
import React from 'react';
import { TiWeatherPartlySunny,TiPencil,TiInputCheckedOutline } from 'react-icons/ti';
import '../style/MobileHome.css';
import {BsGithub} from 'react-icons/bs';
import ContactForm from './ContactForm';


const skillsData = [
    { skill: 'HTML', level: 80 },
    { skill: 'CSS', level: 70 },
    { skill: 'JavaScript', level: 90 },
    { skill: 'React', level: 75 },
    { skill: 'Node.js', level: 80 },
    { skill: 'Express', level: 90 },
    { skill: 'MySql', level: 70 },
    { skill: 'C', level: 60 },
    { skill: 'C++', level: 90 },

    // Add more skills here
  ];

const MobileHome = () => {
  return (
    <div className="portfolio">
              <a href="https://github.com/saadtahir995" target="_blank"
                  rel="noopener noreferrer"><BsGithub size={50} style={{marginLeft:'7%',marginBottom:'6%',color:'black'}}/></a>

      <div className="introduction">
        <h1>Hi, I'm Saad</h1>
        <p>Welcome to my portfolio! I'm a passionate web developer with a strong focus on creating engaging and user-friendly experiences.</p>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>I'm a web developer based in Lahore,Pakistan. I specialize in Full Stack web development and enjoy creating responsive and visually appealing websites.</p>
      </div>

      <div className="skills">
        <h2 className="section-title">Skills</h2>
        {skillsData.map((item, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{item.skill}</div>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: `${item.level}%` }}></div>
            </div>
          </div>
        ))}
        <br />
        <div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="35" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="35" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="35" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="35" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="35" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="35" alt="express logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="35" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" height="35" alt="php logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" height="35" alt="cplusplus logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="35" alt="c logo"  />
</div>
      </div>
      <hr />

      <div className="projects">
        <h2 className="section-title">Projects</h2>
        
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg project-card">
              <div className="card-body">
                <h2 className="card-title">Weather App</h2>
                <div className="project-icon">
                  <TiWeatherPartlySunny size={135} className="project-icon" />
                </div>
                <p className="card-text">
                  The Weather App provides instant weather updates for cities worldwide.
                  Users can search for cities and get real-time data, including temperature,
                  humidity, and more.
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
          <div className="col-md-4" style={{marginTop:'5%'}}>
            <div className="card shadow-lg project-card">
              <div className="card-body">
                <h2 className="card-title">Blog App</h2>
                <div className="project-icon">
                  <TiPencil size={135} className="project-icon" />
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
          <div className="col-md-4" style={{marginTop:'5%'}}>
            <div className="card shadow-lg project-card">
              <div className="card-body">
                <h2 className="card-title">To-Do App</h2>
                <div className="project-icon">
                  <TiInputCheckedOutline size={150} className="project-icon" />
                </div>
                <p className="card-text">
                  A simple to-do app developed using MongoDB, Express, React, and Node.js.
                  Users can add, edit, and delete tasks with ease.
                </p>
                <a
                  href="https://to-do-app-mauve-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Go to Project Website
                </a>
              </div>
            </div>
          </div>
      </div>
      <br />
      <hr />
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
    <img src="https://img.shields.io/static/v1?message=Discord&logo=discord&label=&color=7289DA&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="discord logo" style={{marginRight:'2%',marginTop:'7%'}}  />
  </a>
  <a href="https://www.linkedin.com/in/saad-tahir-384ab81a7" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo" style={{marginTop:'7%'}}  />
  </a>
</div>
</div>
<br />

<hr />

      <div className=" section contact" style={{width:'100%'}}>
      <ContactForm/>
        
      </div>
    </div>
    </div>
  );
}

export default MobileHome;
