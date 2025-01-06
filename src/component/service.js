import React from 'react';
import '../App.css';
const Service = () => {
  return (
    <div className="service-page">
      <header className="service-header">
        <h1>Our Services</h1>
        <p>We offer a wide range of high-quality services to meet your needs.</p>
      </header>

      <section className="service-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>We build responsive, user-friendly websites tailored to your business.</p>
        </div>

        <div className="service-item">
          <h2>Mobile App Development</h2>
          <p>Our team develops mobile apps for iOS and Android with modern technologies.</p>
        </div>

        <div className="service-item">
          <h2>Front-end developer</h2>
          <p>Work on the visual elements of a website.</p>
        </div>

        <div className="service-item">
          <h2>Back-end developer</h2>
          <p>Works on the server side of a website or application,including databases,APIs,and back-end logic.</p>
        </div>
      </section>

      <section className="cta">
        <p>Ready to take your business to the next level? Contact us today!</p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
}

export default Service;

