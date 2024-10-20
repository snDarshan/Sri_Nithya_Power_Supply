import React from 'react';
import carousel1 from '../img/carousel-1.jpg'; 
import carousel2 from '../img/carousel-2.jpg'; 

const Carousel = () => {
  return (
    <div className="container-fluid px-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={carousel1} alt="Image 1" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8 text-start">
                    <p className="fs-4 text-white">Welcome to our dairy farm</p>
                    <h1 className="display-1 text-white mb-5 animated slideInRight">The Farm of Dairy Products</h1>
                    <a href="#" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={carousel2} alt="Image 2" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-lg-8 text-end">
                    <p className="fs-4 text-white">Welcome to our dairy farm</p>
                    <h1 className="display-1 text-white mb-5 animated slideInRight">Best Organic Dairy Products</h1>
                    <a href="#" className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft">Explore More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
