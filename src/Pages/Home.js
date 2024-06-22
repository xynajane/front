import React from 'react';
import './style.css';

function Home() {
  return (
    <div>
      <header>
        <div className="header-top">
          <h1><a href="/home">TourSpots</a></h1>
          <div className="logout-link">
            <a href="/login">Log out</a>
          </div>
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
      
      <div className="separator"></div>
      <div className="landing">
        <h1>
          "Embark on a Journey Like No Other: TourSpots, Your Partner in Philippine Travel!"
        </h1>
      </div>
      <div className="separator"></div>

      <footer>
        <div className="separator"></div>
        <div>
          <h1><a href="/home">TourSpots</a></h1>
          <p>© 2024 - PIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
