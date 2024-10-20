
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Copyright from '../components/Copyright';
import BackToTop from '../components/BackToTop';
import PageHeaderService from '../components/PageHeaderService';
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

function ServicePage() {
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
                    <Navbar />
                    <PageHeaderService />
                    <Services />
                    <Features />
                    <Footer />
                    <Copyright />
                    <BackToTop />
                </>
            )}
        </div>
    );
}

export default ServicePage;
