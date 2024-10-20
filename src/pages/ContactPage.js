
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner'; 
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';
import BackToTop from '../components/BackToTop';
import ContactPageHeader from '../components/ContactPageHeader';
import ContactPageForm from '../components/Contactform';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../lib/animate/animate.css'
import '../lib/animate/animate.min.css'
import '../lib/lightbox/css/lightbox.css'
import '../lib/lightbox/css/lightbox.min.css'


function ContactPage() {
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
                    <ContactPageHeader/>
                    <ContactPageForm/>
                    <Footer />
                    <Copyright/>
                    <BackToTop/>
                </>
            )}
        </div>
    );
}

export default ContactPage;
