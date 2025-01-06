import React from 'react';
import './works.css';
import work1 from './work1.jpg';
import work2 from './work2.png';
import work3 from './work3.jpg';
import work4 from './work4.jpg';
import work5 from './work5.jpg';
import work6 from './work6.png';
import arrow2 from './arrow2.jpg';
const MyWork = () => {
  return(
    <div id='work' className='mywork'>
    <div className="myWork-title">
      <h1>My latest work</h1>
    </div>
    <div className="mywork-container">
      <img style={{width: "300px",height: "200px"}}src={work1} alt="" />
      <img style={{width: "300px",height: "200px"}}src={work2} alt="" />     
      <img style={{width: "300px",height: "200px"}}src={work3} alt="" />
      <img style={{width: "300px",height: "200px"}}src={work4} alt="" />
      <img style={{width: "300px",height: "200px"}}src={work5} alt="" />
      <img style={{width: "300px",height: "200px"}}src={work6} alt="" />
    </div>
    <div className="mywork-showmore">
      <p>Show More</p>
      <img style={{width: "50px",height: "50px"}}src={arrow2} alt="" />
    </div>
    </div>
  )
}

export default MyWork;