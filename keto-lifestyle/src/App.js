import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
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

import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={LandingPage} />
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
