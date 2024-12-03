import React from "react";

const CallToActionSection = ({ callTooAction }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                minHeight: "400px",
                animationDelay: "0.1s",
                animationName: "none",
              }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={callTooAction}
                  style={{
                    objectFit: "cover",
                  }}
                  alt="Call to Action"
                />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                animationDelay: "0.5s",
                animationName: "none",
              }}
            >
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Become A Teacher</h1>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                  sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-primary py-3 px-5" href="">
                  Get Started Now
                  <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
