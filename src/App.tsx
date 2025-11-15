import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/about-me/about-me';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Gallery } from './components/gallery/gallery';
import { Store } from './components/store/store';
import { Blog } from './components/blog/blog';
import { Footer } from './components/footer/footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
};

export default App;