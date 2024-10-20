
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import GalleryPage from './pages/GalleryPage';
import FeaturesPage from './pages/FeaturesPage';
import TeamPage from './pages/TeamPage';
import TestimonialPage from './pages/TestimonialPage';
import Page404 from './pages/Page404';
import ContactPage from './pages/ContactPage';
import './lib/animate/animate.css'
import './lib/animate/animate.min.css'
import './lib/lightbox/css/lightbox.css'
import './lib/lightbox/css/lightbox.min.css'
import './lib/owlcarousel/assets/owl.carousel.css'
import './lib/owlcarousel/assets/owl.theme.default.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
