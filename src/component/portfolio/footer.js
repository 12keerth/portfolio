import React from 'react';
import './footer.css';
import userimage from './userimage.png';
const Footer = () => {
  return(
    <div className='footer'>
     <div className="footer-top">
      <div className="footer-top-left">
      <h1><span>Keerthi</span></h1>
       <p>I am a fullstack developer from, INDIA and I am a fresher in the compaines.</p> 
      </div>
      <div className="footer-top-right">
        <div className="footer-email-input">
          <img style={{width: "40px",height: "40px",borderRadius: '10px'}}src={userimage} alt="" />
          <input type="email" placeholder='Enter your email' />
        </div>
        <div className="footer-subscribe">Subscribe</div>
      </div>
     </div>
     <hr />
     <div className="footer-bottom">
      <p className="footer-bottom-left">@ 2024 Keerthi. All rights reserved.</p>
      <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
      </div>
     </div>
    </div>
  )
}
export default Footer;
