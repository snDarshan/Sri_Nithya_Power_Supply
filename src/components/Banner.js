import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import banner1 from '../img/banner-1.jpg'; 
import banner2 from '../img/banner-2.jpg'; 
import banner from '../img/banner.jpg'; 

const Banner = () => {
    return (
        <Parallax
            bgImage={banner}
            bgImageAlt="Banner Background"
            strength={500} 
            style={{
                height: '30rem', 
            }}
        >
            <div className="overlay"></div>
            <div className="content">
                <div className="container py-5">
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
        </Parallax>
    );
};

export default Banner;
