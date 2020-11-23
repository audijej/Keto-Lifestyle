import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import NavbarTop from './components/Navbar/NavbarTop'
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage';
import RecipesPage from './pages/Recipes';
import Beef from './pages/Beef';
import Breakfast from './pages/Breakfast';
import Chicken from './pages/Chicken';
import Lamb from './pages/Lamb';
import Pork from './pages/Pork';
import Seafood from './pages/Seafood';
import Turkey from './pages/Turkey';
import About from './pages/About';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <NavbarTop className="navigationBar" />
        <Navbar className="navigationBar" />

        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faqs" component={LandingPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/recipes" component={RecipesPage} />
        <Route exact path="/beef" component={Beef} />
        <Route exact path="/breakfast" component={Breakfast} />
        <Route exact path="/chicken" component={Chicken} />
        <Route exact path="/lamb" component={Lamb} />
        <Route exact path="/pork" component={Pork} />
        <Route exact path="/seafood" component={Seafood} />
        <Route exact path="/turkey" component={Turkey} />
        <br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
