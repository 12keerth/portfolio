import React from "react";
import "./contact.css";
import mailimage from './mailimage.png';
import locationimage from './locationimage.png';
import callimage from './callimage.png';
  const Contact = () => {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b5e4e610-d37d-49fc-ac31-d7493dd65fdb");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        // console.log("Success", res);
        alert(res.message);
      }
    };
  
  
    return (
      <div id='contact' className='contact'>
        <div className="contact-title">
          <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
            <img style={{width: "30px",height: "30px"}}src={mailimage} alt="" /> <p>keerthisathya080@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img style={{width: "30px",height: "30px"}}src={callimage} alt="" /> <p>638-212-5857</p>
            </div>
            <div className="contact-detail">
            <img style={{width: "30px",height: "30px"}}src={locationimage} alt="" /> <p>India</p>
            </div>
          </div>
          </div>
          <form onSubmit={onSubmit}className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    )
  }
   
  

export default Contact;
