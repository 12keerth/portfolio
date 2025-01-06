import React, { useState } from 'react';
import './nav.css';
import logo2 from './logo2.jpg';
import underline from './underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuicon from './menuicon.png';
import menuclose from './menuclose.png';
const Navbar =() => {
  const [menu,setMenu] = useState("home");
  return(
    <div className='navbar'>
     <img src={logo2} alt="" />
     <img src={menuicon} alt="" className="nav-mob-open" />
     <ul className="nav-menu">
      <img src={menuclose} alt="" className="nav-mob-close"/>
      <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img style={{width: "80px",height: "80px"}}src={underline} alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img style={{width: "80px",height: "80px"}}src={underline} alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img style={{width: "80px",height: "80px"}}src={underline} alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img style={{width: "80px",height: "80px"}}src={underline} alt=''/>:<></>}</li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img style={{width: "80px",height: "80px"}}src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
     </div>
  )
}
export default Navbar;