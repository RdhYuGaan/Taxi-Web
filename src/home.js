// src/Home.js

import React from 'react';
import './App.css'; // Optional: for styling

function Home() {
  return (
    <div className="homecontainer">
      <section className="herosection">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <button className="ctabutton">Get Started</button>
      </section>

      <section className="introsection">
        <h2>Who We Are</h2>
        <p>
          We are a team of dedicated professionals committed to delivering high-quality services.
          Our mission is to help you achieve your goals.
        </p>
      </section>

      <section className="featuredsection">
        <h2>Our Services</h2>
        <div className="featuredcontent">
          <div className="serviceitem">
            <h3>Service One</h3>
            <p>Discover how our first service can help you.</p>
          </div>
          <div className="serviceitem">
            <h3>Service Two</h3>
            <p>Explore the benefits of our second service.</p>
          </div>
          <div className="serviceitem">
            <h3>Service Three</h3>
            <p>Learn more about our third service.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
