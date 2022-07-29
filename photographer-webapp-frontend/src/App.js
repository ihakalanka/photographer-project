import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './pages/styles/bootstrap.css';
import './pages/styles/style.css';

import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
