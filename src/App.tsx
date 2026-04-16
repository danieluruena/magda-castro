import React, { lazy, Suspense } from 'react'
import {
 BrowserRouter as Router, Routes, Route, 
} from 'react-router-dom'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { WhatsAppButton } from './components/whatsappButton/whatsappButton'
import { ScrollToTopButton } from './components/scrollToTopButton/scrollToTopButton'
import './App.css'

const Home = lazy(() => import('./components/home/home.tsx').then(module => ({ default: module.Home })))
const Gallery = lazy(() => import('./components/gallery/gallery.tsx').then(module => ({ default: module.Gallery })))
const Services = lazy(() => import('./components/services/services.tsx').then(module => ({ default: module.Services })))
const AboutMe = lazy(() => import('./components/aboutMe/aboutMe.tsx').then(module => ({ default: module.AboutMe })))
const Store = lazy(() => import('./components/store/store.tsx').then(module => ({ default: module.Store })))
const Blog = lazy(() => import('./components/blog/blog.tsx').then(module => ({ default: module.Blog })))
const Contact = lazy(() => import('./components/contact/contact.tsx').then(module => ({ default: module.Contact })))

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Suspense fallback={<div className="loading-spinner">Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/sobre-mi" element={<AboutMe />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </Router>

  )
}

export default App