import React from 'react';
import Slider from "react-slick";
import testimonial1 from '../img/testimonial-1.jpg';
import testimonial2 from '../img/testimonial-2.jpg';
import testimonial3 from '../img/testimonial-3.jpg';
import testimonial4 from '../img/testimonial-4.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <p className="section-title bg-white text-center text-primary px-3">Testimonial</p>
                    <h1 className="mb-5">What People Say About Our Dairy Farm</h1>
                </div>
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-img">
                            <img className="img-fluid animated pulse infinite" src={testimonial1} alt="" />
                            <img className="img-fluid animated pulse infinite" src={testimonial2} alt="" />
                            <img className="img-fluid animated pulse infinite" src={testimonial3} alt="" />
                            <img className="img-fluid animated pulse infinite" src={testimonial4} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                        <Slider {...settings}>
                            <div className="testimonial-item">
                                <img className="img-fluid mb-3" src={testimonial1} alt="" />
                                <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.</p>
                                <h5>Client Name</h5>
                                <span className="text-primary">Profession</span>
                            </div>
                            <div className="testimonial-item">
                                <img className="img-fluid mb-3" src={testimonial2} alt="" />
                                <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.</p>
                                <h5>Client Name</h5>
                                <span className="text-primary">Profession</span>
                            </div>
                            <div className="testimonial-item">
                                <img className="img-fluid mb-3" src={testimonial3} alt="" />
                                <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.</p>
                                <h5>Client Name</h5>
                                <span className="text-primary">Profession</span>
                            </div>
                            <div className="testimonial-item">
                                <img className="img-fluid mb-3" src={testimonial4} alt="" />
                                <p className="fs-5">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.</p>
                                <h5>Client Name</h5>
                                <span className="text-primary">Profession</span>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
