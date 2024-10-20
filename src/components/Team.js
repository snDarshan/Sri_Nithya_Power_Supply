import React from 'react';
import teamMember1 from '../img/team-1.jpg';
import teamMember2 from '../img/team-2.jpg';
import teamMember3 from '../img/team-3.jpg';

const Team = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <p className="section-title bg-white text-center text-primary px-3">Our Team</p>
                    <h1 className="mb-5">Experienced Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded p-4">
                            <img className="img-fluid rounded mb-4" src={teamMember1} alt="Adam Crew" />
                            <h5>Adam Crew</h5>
                            <p className="text-primary">Founder</p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded p-4">
                            <img className="img-fluid rounded mb-4" src={teamMember2} alt="Doris Jordan" />
                            <h5>Doris Jordan</h5>
                            <p className="text-primary">Veterinarian</p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded p-4">
                            <img className="img-fluid rounded mb-4" src={teamMember3} alt="Jack Dawson" />
                            <h5>Jack Dawson</h5>
                            <p className="text-primary">Farmer</p>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle mx-1" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
