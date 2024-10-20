import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.sticky-top');
      if (window.scrollY > 300) {
        navbar.classList.add('shadow-sm');
        navbar.style.top = '0px';
      } else {
        navbar.classList.remove('shadow-sm');
        navbar.style.top = '-100px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
      <NavLink to="/" className="navbar-brand d-flex align-items-center">
        <h1 className="m-0">Milky</h1>
      </NavLink>
      <button
        type="button"
        className="navbar-toggler me-0"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
          <NavLink to="/services" className="nav-item nav-link" activeClassName="active">Services</NavLink>
          <NavLink to="/products" className="nav-item nav-link" activeClassName="active">Products</NavLink>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu bg-light m-0">
              <NavLink to="/gallery" className="dropdown-item">Gallery</NavLink>
              <NavLink to="/features" className="dropdown-item">Features</NavLink>
              <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
              <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
              <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>
        </div>
        <div className="border-start ps-4 d-none d-lg-block">
          <button type="button" className="btn btn-sm p-0" aria-label="Search">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
