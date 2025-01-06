import React from 'react';
import {Link} from 'react-router';
import '../App.css';
const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Our Website!</h1>
        <p>Your go-to place for amazing products and services.</p>
        <Link to={'/about'} className="cta-button">Get Started</Link>
      </header>
      
      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>High-Quality Products</li>
          <li>Exceptional Customer Service</li>
          <li>Fast and Reliable Delivery</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        </ul>
      </section>

      <section className="footer">
        <p>© 2024 Our Website. All Rights Reserved.</p>
      </section>
    </div>
  );
}

export default Home;

