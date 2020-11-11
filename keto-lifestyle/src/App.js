import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage'

import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={LandingPage} />
<br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
