// src/pages/Booking.js
import React, { useState } from 'react';
import './style.css';

function Booking() {
  const [selectedSpot, setSelectedSpot] = useState(null);

  const showBookingForm = (spot) => {
    setSelectedSpot(spot);
  };

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
            <a href="/destinations">Destinations</a>
            <a href="/booking">Booking</a>
            <a href="/contact">Contact Us</a>
          </div>
          <p>Group 4</p>
        </div>
      </header>

      <main className="unique-main">
        <div className="spot" onClick={() => showBookingForm('Boracay')}>
          <img src="/img/1.jpg" alt="Tourist Spot 1" />
          <h2>Boracay</h2>
          <p>Location: Boracay, Philippines</p>
          <p>Price: 10,000 Php</p>
          <p>5-8 People</p>
        </div>

        <div className="spot" onClick={() => showBookingForm('Mount Mayon')}>
          <img src="/img/2.jpg" alt="Tourist Spot 2" />
          <h2>Mount Mayon</h2>
          <p>Location: Bicol, Philippines</p>
          <p>Price: 1,000 Php</p>
          <p>Per head</p>
        </div>

        <div className="spot" onClick={() => showBookingForm('Chocolate Hills')}>
          <img src="/img/3.jpg" alt="Tourist Spot 3" />
          <h2>Chocolate Hills</h2>
          <p>Location: Bohol, Philippines</p>
          <p>Price: 1,000 Php</p>
          <p>Per head</p>
        </div>

        <div className="spot" onClick={() => showBookingForm('Banaue Rice Terraces')}>
          <img src="/img/4.jpg" alt="Tourist Spot 4" />
          <h2>Banaue Rice Terraces</h2>
          <p>Location: Ifugao, Philippines</p>
          <p>Price: 5,000 Php</p>
          <p>2-3 People</p>
        </div>

        <div className="spot" onClick={() => showBookingForm('El Nido Palawan')}>
          <img src="/img/5.jpg" alt="Tourist Spot 5" />
          <h2>El Nido Palawan</h2>
          <p>Location: Palawan, Philippines</p>
          <p>Price: 15,000 Php</p>
          <p>2-4 People</p>
        </div>

        {selectedSpot && (
          <div id="booking-form" className="booking-form">
            <form action="#" method="post">
              <h1 id="location-heading">Location selected: {selectedSpot}</h1>
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />

              <button type="submit">Book Now</button>
            </form>
            <br /><br />
          </div>
        )}
        <div className="separator"></div>
      </main>

      <footer>
        <div className="separator"></div>
        <div>
          <h1><a href="/home">TourSpots</a></h1>
          <p>© 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Booking;
