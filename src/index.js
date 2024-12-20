import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info.js'
import About from './About.js'
import Interests from './Interests.js'
import Footer from './Footer.js'
import './style.css'

ReactDOM.render(
  <div className="container">
  <Info />
  <About />
  <Interests />
  <Footer />
  </div>,
  document.getElementById("root")
)