import React from 'react';

const Copyright = () => {
    return (
        <div className="container-fluid bg-secondary text-body copyright py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="fw-semi-bold" href="#">Your Site Name</a>, All Rights Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        {/* Comment for attribution */}
                        {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                        Designed By <a className="fw-semi-bold" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
