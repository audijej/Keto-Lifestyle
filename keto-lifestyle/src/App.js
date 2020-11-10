import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar />
      <h1>Keto Lifestyle Page</h1>
    </div>
    </Router>
  );
}

export default App;
