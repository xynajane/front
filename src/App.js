// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <header>
                    <div className="header-top">
                        <h1><Link to="/home">TourSpots</Link></h1>
                        <div className="logout-link">
                            <Link to="/login">Log out</Link>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <div className="header-bottom">
                        <div className="navs">
                            <Link to="/home">Home</Link>
                            <Link to="/destinations">Booking</Link>
                            <Link to="/booking">Destinations</Link>
                            <Link to="/contact">Contact Us</Link>
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
                
                <main>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/destinations" component={Destinations} />
                        <Route path="/booking" component={Booking} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>
                
                <footer>
                    <div className="separator"></div>
                    <div>
                        <h1><Link to="/home">TourSpots</Link></h1>
                        <p>© 2024 - PIT. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
