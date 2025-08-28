import React from "react";
import "../assets/css/Contact.css";
import PageHeader from "../component/PageHeader";
import ContactForm from "../component/ContactForm";

export default function Contact() {
  return (
    <div>
      <PageHeader
        title="Let’s Connect on your next project"
        backgroundImage={"/images/about/about-header.jpg"}
        breadcrumb={[
          {
            label:
              "We’d be happy to answer your questions and explore how we can collaborate in the future.",
          },
        ]}
      />

      {/*content*/}
      <div id="colorlib-main">
        <section className="container ftco-section ftco-no-pt ftco-no-pb">
          <div className="px-md-0">
            <div className="row d-flex no-gutters">
              <ContactForm />

              {/* Contact Info */}
              <div className=" col-lg-4 col-md-5 d-flex align-items-stretch">
                <div className="info-wrap js-fullheight bg-yellow-dark w-100 p-md-5 p-4">
                  <h3 className="text-uppercase heading text-secondary-emphasis">
                    Let's get in touch
                  </h3>
                  <p className="mb-4 text-secondary-emphasis">
                    We're open for any suggestion or just to have a chat
                  </p>

                  {/*address*/}
                  <div className="dbox w-100 d-flex gap-2 align-items-start text-secondary-emphasis">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-map-marker-alt fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bolder m-0">Official Address</h6>
                      <p>
                        13B-M44-Musaffah Industrial <br /> Abu Dhabi, UAE
                      </p>
                    </div>
                  </div>

                  {/*mobile*/}
                  <div className="dbox w-100 d-flex gap-2 align-items-start text-secondary-emphasis">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-phone fs-4"></i>
                    </div>
                    <div>
                      <h6 className="fw-bolder m-0">Call Us</h6>
                      <a className="text-secondary-emphasis" href="tel:+971506302270">
                        +971 50 630 2270
                      </a>
                    </div>
                  </div>

                  {/*email*/}
                  <div className="dbox w-100 d-flex gap-2 align-items-start text-secondary-emphasis">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-paper-plane fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bolder m-0">Email</h6>
                      <a className="text-secondary-emphasis" href="mailto:info@graphiclink.com">
                        info@graphiclink.ae
                      </a>
                    </div>
                  </div>

                  {/*web*/}
                  <div className="dbox w-100 d-flex gap-2 align-items-start text-secondary-emphasis">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <i className="fas fa-globe fs-5"></i>
                    </div>
                    <div>
                      <h6 className="fw-bolder m-0">Website</h6>
                      <p>www.graphiclink.ae</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="row d-flex no-gutters">
              <div id="map" className="map w-100 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.0233902446025!2d54.47704927404869!3d24.34567786566568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e410030bf32cb%3A0x3f66d3b603a1b543!2sGRAPHIC%20LINK%20PUBLISHIN%20AND%20ADVERTISING%20LLC!5e0!3m2!1sen!2sae!4v1756379935403!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
