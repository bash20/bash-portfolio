import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import DarkModeProvider from './context/DarkModeContext';
import Starbackground from './components/Starbackground';

function App() {
  return (
    <DarkModeProvider>
      <HashRouter>
        <div className="relative min-h-screen pt-[70px] bg-gradient-to-b from-purple-100 to-white dark:bg-black dark:bg-none transition-colors duration-300 ">
          <Starbackground/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </DarkModeProvider>
  );
}

export default App;
