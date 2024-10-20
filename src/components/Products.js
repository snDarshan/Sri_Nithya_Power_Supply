import React from 'react';
import product1 from '../img/product-1.jpg';
import product2 from '../img/product-2.jpg';
import product3 from '../img/product-3.jpg';
import product4 from '../img/product-4.jpg';

const Products = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <p className="section-title bg-white text-center text-primary px-3">Our Products</p>
                    <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
                </div>
                <div className="row gx-4">
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="product-item">
                            <div className="position-relative">
                                <img className="img-fluid" src={product1} alt="Pure Milk" />
                                <div className="product-overlay">
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Pure Milk</a>
                                <span className="text-primary me-1">$19.00</span>
                                <span className="text-decoration-line-through">$29.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="product-item">
                            <div className="position-relative">
                                <img className="img-fluid" src={product2} alt="Fresh Meat" />
                                <div className="product-overlay">
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Fresh Meat</a>
                                <span className="text-primary me-1">$19.00</span>
                                <span className="text-decoration-line-through">$29.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="product-item">
                            <div className="position-relative">
                                <img className="img-fluid" src={product3} alt="Dairy Products" />
                                <div className="product-overlay">
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Dairy Products</a>
                                <span className="text-primary me-1">$19.00</span>
                                <span className="text-decoration-line-through">$29.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="product-item">
                            <div className="position-relative">
                                <img className="img-fluid" src={product4} alt="Organic Food" />
                                <div className="product-overlay">
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-link"></i></a>
                                    <a className="btn btn-square btn-secondary rounded-circle m-1" href=""><i className="bi bi-cart"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <a className="d-block h5" href="">Organic Food</a>
                                <span className="text-primary me-1">$19.00</span>
                                <span className="text-decoration-line-through">$29.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
