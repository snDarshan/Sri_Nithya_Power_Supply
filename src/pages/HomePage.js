
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Spinner from '../components/Spinner'; 
import Navbar from '../components/Navbar';
import About from '../components/About';
import Features from '../components/Features';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Products from '../components/Products';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import Copyright from '../components/Copyright';
import BackToTop from '../components/BackToTop';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../lib/animate/animate.css'
import '../lib/animate/animate.min.css'
import '../lib/lightbox/css/lightbox.css'
import '../lib/lightbox/css/lightbox.min.css'
// import '../lib/wow/wow.min.js';
// import '../lib/easing/easing.min.js';
// import '../lib/waypoints/waypoints.min.js';
// import '../lib/owlcarousel/owl.carousel.min.js';
// import '../lib/counterup/counterup.min.js';
// import '../lib/parallax/parallax.min.js';
// import '../lib/lightbox/js/lightbox.min.js';

// import MyComponent from '../components/MyComponent';

function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 2000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner /> 
            ) : (
                <>
                    <Header />
                    <Navbar/>
                    <Carousel />
                    <About/>
                    <Features/>
                    <Banner/>
                    <Services/>
                    <Gallery/>
                    <Products/>
                    <Team/>
                    <Testimonial/>  
                    <Footer />
                    <Copyright/>
                    <BackToTop/>
                </>
            )}
        </div>
    );
}

export default HomePage;
