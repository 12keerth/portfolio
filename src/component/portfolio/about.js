import React from "react";
import './about.css';
import keekee from './keekee.jpg';
const About = () => {
  return(
    <div id='about' className='about'>
    <div className="about-title">
      <h1>About me</h1>
      {/* <img src="" alt="" /> */}
    </div>
    <div className="about-section">
      <div className="about-left">
        <img style={{width: "300px",height: "500px"}}src={keekee} alt="" />
      </div>
      <div className="about-right">
        <div className="about-para">
          <p>Learn about full-stack developer skills, salary, and how you can become one.someone who can work on both the back-end and front-end of systems.</p>
        <p>This means that they can develop fully fledged platforms (with databases, servers and clients) which don't need other applications to function.</p>
        </div>
        <div className="about-skills">
          <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} /></div>
          <div className="about-skill"><p>Bootstrap</p><hr style={{width: "70%"}} /></div>
          <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
          <div className="about-skill"><p>React Js</p><hr style={{width: "50%"}} /></div>
        </div>
      </div>
    </div>
    <div className="about-achievements">
      <div className="about-achievement">
        <h1>Fresher</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>5+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
    </div>
    </div>
  )
}
export default About;