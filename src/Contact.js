// src/Contact.js

import React, { useState } from 'react';
import './App.css'; // Optional: for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to a server)
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contactcontainer">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contactform">
        <div className="formgroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="formgroup">
          <label htmlFor="email">Contact Number:</label>
          <input
            type="Contact Number"
            id="Contact Number"
            name="Contact Number"
            value={formData.Contact_Number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="formgroup">
          <label htmlFor="email">e mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        


        <div className="formgroup">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submitbutton">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
