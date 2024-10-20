
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Spinner from '../components/Spinner'; 
import Navbar from '../components/Navbar';
import About from '../components/About';
import Features from '../components/Features';
import Banner from '../components/Banner';
import Team from '../components/Team';
import Copyright from '../components/Copyright';
import BackToTop from '../components/BackToTop';
import PageHeader from '../components/PageHeader';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../lib/animate/animate.css'
import '../lib/animate/animate.min.css'
import '../lib/lightbox/css/lightbox.css'
import '../lib/lightbox/css/lightbox.min.css'



function AboutPage() {
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
                    <PageHeader/>
                    <About/>
                    <Features/>
                    <Banner/>
                    <Services/>
                    <Team/>
                   
                    <Footer />
                    <Copyright/>
                    <BackToTop/>
                </>
            )}
        </div>
    );
}

export default AboutPage;
