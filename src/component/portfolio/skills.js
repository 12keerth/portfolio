import React from "react";
import './skills.css';
import full6 from './full6.png';
import calculator from './calculator.png';
import pimage from './pimage.webp';
const Skills = () => {
  return(
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">They ensure a seamless integration between the user interface and the underlying back-end logic  handling multiple aspects of a project</span>
    <div className="skillBars">
      <div className="skillBar">
        <img src={full6} alt="full6" className="skillBarImg" />
        <div className="skillBarText">
          <h2>HTML,CSS</h2>
          <p>HTML is a markup language used to create static web pages and web applications.</p>
        </div>
      </div>
    </div>
    <div className="skillBars">
      <div className="skillBar">
        <img src={calculator} alt="calculator" className="skillBarImg" />
        <div className="skillBarText">
          <h2>JavaScript</h2>
          <p>A calculator is a machine which allows people to do math operations more easily.</p>
        </div>
      </div>
    </div>
    <div className="skillBars">
      <div className="skillBar">
        <img src={pimage} alt="pimage" className="skillBarImg" />
        <div className="skillBarText">
          <h2>React</h2>
          <p>It provides insight into your personality and work ethic.</p>
        </div>
      </div>
    </div>
    </section>
  )
}
export default Skills;
