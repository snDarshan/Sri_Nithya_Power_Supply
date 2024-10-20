import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../lib/animate/animate.css';
import '../lib/lightbox/css/lightbox.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Features = () => {
  const [experience, setExperience] = useState(0);
  const [awards, setAwards] = useState(0);
  const [totalAnimals, setTotalAnimals] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const sectionRef = useRef(null); 

  useEffect(() => {
    const counters = [
      { target: 25, setCount: setExperience },
      { target: 183, setCount: setAwards },
      { target: 2619, setCount: setTotalAnimals },
      { target: 51940, setCount: setHappyClients },
    ];

    // Function to start counting
    const startCounting = () => {
      counters.forEach(({ target, setCount }) => {
        let count = 0;
        const increment = Math.ceil(target / 50);
        const duration = 2000;
        const intervalTime = duration / 100;

        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          setCount(count);
        }, intervalTime);
      });
    };

    // Setup Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(); 
          observer.unobserve(entry.target); 
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current); 
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title bg-white text-start text-primary pe-3">Why Us!</p>
            <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita...</p>
            <p><i className="fa fa-check text-primary me-3"></i>Justo magna erat amet</p>
            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check text-primary me-3"></i>Clita erat ipsum et lorem et sit</p>
            <a className="btn btn-secondary rounded-pill py-3 px-5 mt-3" href="">Explore More</a>
          </div>
          <div className="col-lg-6">
            <div className="rounded overflow-hidden">
              <div className="row g-0">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="text-center bg-primary py-5 px-4">
                    <img className="img-fluid mb-4" src="img/experience.png" alt="" />
                    <h1 className="display-6 text-white">{experience}</h1>
                    <span className="fs-5 fw-semi-bold text-secondary">Years Experience</span>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="text-center bg-secondary py-5 px-4">
                    <img className="img-fluid mb-4" src="img/award.png" alt="" />
                    <h1 className="display-6">{awards}</h1>
                    <span className="fs-5 fw-semi-bold text-primary">Award Winning</span>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="text-center bg-secondary py-5 px-4">
                    <img className="img-fluid mb-4" src="img/animal.png" alt="" />
                    <h1 className="display-6">{totalAnimals}</h1>
                    <span className="fs-5 fw-semi-bold text-primary">Total Animals</span>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="text-center bg-primary py-5 px-4">
                    <img className="img-fluid mb-4" src="img/client.png" alt="" />
                    <h1 className="display-6 text-white">{happyClients}</h1>
                    <span className="fs-5 fw-semi-bold text-secondary">Happy Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
