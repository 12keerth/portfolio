import React from 'react';
import './intro.css';
import keerthi from './keerthi.jpg';
import hireme from './hireme.png';
import { Link } from 'react-scroll';
const Intro =() => {
  return(
    <section id="intro">
      <div className="introContent">
       <span className="hello">Hello,</span>
       <span className="introText">I'm<span className="introName">Keerthiya</span><br />Fullstack Developer</span>
      <p className="introPara">A full-stack developer helps build and<br /> maintain both the front-end and the back-end of a website. </p>
     <Link><button className="btn"><img src={ hireme } alt="Hire"  className="hireme"/>Hire Me</button></Link>
      </div>
      <img src={ keerthi } alt="profile" className="bg" />
    </section>
  );
}
export default Intro;