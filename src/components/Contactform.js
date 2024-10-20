import React from 'react';


const ContactPageForm = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <p className="section-title bg-white text-center text-primary px-3">Contact Us</p>
                    <h1 className="mb-5">If You Have Any Query, Please Contact Us</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="mb-4">Need a functional contact form?</h3>
                        <p className="mb-4">
                            The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                        </p>
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '250px' }}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <h3 className="mb-4">Contact Details</h3>
                        <div className="d-flex border-bottom pb-3 mb-3">
                            <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                                <i className="fa fa-map-marker-alt text-body"></i>
                            </div>
                            <div className="ms-3">
                                <h6>Our Office</h6>
                                <span>123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="d-flex border-bottom pb-3 mb-3">
                            <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                                <i className="fa fa-phone-alt text-body"></i>
                            </div>
                            <div className="ms-3">
                                <h6>Call Us</h6>
                                <span>+012 345 67890</span>
                            </div>
                        </div>
                        <div className="d-flex border-bottom-0 pb-3 mb-3">
                            <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                                <i className="fa fa-envelope text-body"></i>
                            </div>
                            <div className="ms-3">
                                <h6>Mail Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>

                        <iframe
                            className="w-100 rounded"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0"
                            style={{ minHeight: '300px', border: '0' }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPageForm;
