import React from "react";
import './services.css';
import arrow2 from './arrow2.jpg';
const Services = () => {
  return(
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
          {/* <img src="" alt="" /> */}
      </div>
      <div className="services-container">
        <div className='services-format'>
          <h3>01</h3>
          <h2> Front-End Development</h2>
          <p>Front-end development involves creating the user interface (UI) of a website or application...</p>
          <div className='services-readmore'>
            <p>Read More</p>
            <img style={{width: "50px",heigh:"50px"}}src={arrow2} alt="" />
          </div>
          </div>
          <div className='services-format'>
          <h3>02</h3>
          <h2>Back-End Development</h2>
          <p>Back-end development focuses on the server-side, where the logic, database management...</p>
          <div className='services-readmore'>
            <p>Read More</p>
            <img style={{width: "50px",heigh:"50px"}}src={arrow2} alt="" />
          </div>
          </div>
          <div className='services-format'> 
          <h3>03</h3>
          <h2>API Development</h2>
          <p>Full-stack developers create and manage APIs (Application Programming Interfaces) to used them that it...</p>
          <div className='services-readmore'>
            <p>Read More</p>
            <img style={{width: "50px",heigh:"50px"}}src={arrow2} alt="" />
          </div>
          </div>
          <div className='services-format'>
          <h3>04</h3>
          <h2>Database Management</h2>
          <p>Full-stack developers interact databases to store and retrieve data...</p>
          <div className='services-readmore'>
            <p>Read More</p>
            <img style={{width: "50px",heigh:"50px"}}src={arrow2} alt="" />
          </div>
          </div>
          <div className='services-format'>
          <h3>05</h3>
          <h2>Version Control</h2>
          <p>Full-stack developers use version control systems to track changes  codebase in them to the proper one...</p>
          <div className='services-readmore'>
            <p>Read More</p>
            <img style={{width: "50px",heigh:"50px"}}src={arrow2} alt="" />
          </div>
          </div>
          <div className='services-format'>
          <h3>06</h3>
          <h2>DevOps</h2>
          <p> Full-stack developersdeploying to a production environment into the process...</p>
          <div className='services-readmore'>
            <p>Read More</p>
            <img style={{width: "50px",heigh:"50px"}} src={arrow2} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

    

export default Services;
