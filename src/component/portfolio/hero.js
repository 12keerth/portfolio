import React from 'react';
import './hero.css';
import keerthi from './keerthi.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return(
        <div id='home' className='hero'>
        <img src={keerthi} alt="" />
        <h1><span>I'm Keerthiya,</span> fullstack developer based in INDIA.</h1>
        <p>A full-stack developer helps build and maintain both the front-end and the back-end of a website.</p>
        <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
        </div>
        </div>
    )
}
export default Hero;