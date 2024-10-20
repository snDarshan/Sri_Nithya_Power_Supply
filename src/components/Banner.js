import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../img/banner0.jpeg'; 
import banner2 from '../img/banner-2.jpg'; 
import bannerBg from '../img/banner.jpg'; 
import '../lib/wow/wow.min.js'; 
import $ from 'jquery'; 
import "../lib/parallax/parallax.min.js"

const Banner = () => {
    useEffect(() => {
      
        new WOW().init();
      
        if ($.fn.parallax) {
            $('.banner').parallax(); 
        }

        return () => {

        };
    }, []);

    return (
        <div
            
            className="container-fluid banner my-5 py-5" 
            data-parallax="scroll" 
            style={{ 
                backgroundImage: `url(${bannerBg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                
            }} 
        >
            <div className="container py-5" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-4">
                                <img className="img-fluid rounded" src={banner1} alt="Dairy Product 1" />
                            </div>
                            <div className="col-sm-8">
                                <h2 className="text-white mb-3">We Sell Best Dairy Products</h2>
                                <p className="text-white mb-4">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <Link className="btn btn-secondary rounded-pill py-2 px-4" to="/products">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-4">
                                <img className="img-fluid rounded" src={banner2} alt="Dairy Product 2" />
                            </div>
                            <div className="col-sm-8">
                                <h2 className="text-white mb-3">We Deliver Fresh Milk Worldwide</h2>
                                <p className="text-white mb-4">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <Link className="btn btn-secondary rounded-pill py-2 px-4" to="/delivery">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
