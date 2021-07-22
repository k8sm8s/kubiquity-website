import React from "react";

import { About, Navbar, MainContent, Splash, Footer } from "./components";

// import "./assets/stylesheets/app.scss";

import './App.css';

// import logo from './assets/images/logo.png';

const App = () => (
  <div>
    <Navbar />
    <Splash />
    <MainContent />
    <About />
    <Footer />
  </div>
);

export default App;
