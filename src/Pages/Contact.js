import React from 'react';
import './style.css';

function Contact() {
  return (
    <div>
      <header>
        <div className="header-top">
          <h1><a href="/home">TourSpots</a></h1>
        </div>
        <div className="separator"></div>
        <div className="header-bottom">
          <div className="navs">
            <a href="/home">Home</a>
            <a href="/destinations">Booking</a>
            <a href="/booking">Destinations</a>
            <a href="/contact">Contact Us</a>
          </div>
          <p>Group 4</p>
        </div>
      </header>

      <main className="contact-main">
        <form action="#" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Subject:</label>
          <textarea id="message" name="message" rows="6" required></textarea>

          <button type="submit">Send</button>
        </form>
      </main>
      <br /><br />
      <div className="separator"></div>
      
      <footer>
        <div className="separator"></div>
        <div>
          <h1><a href="/home">TourSpots</a></h1>
          <p>© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
