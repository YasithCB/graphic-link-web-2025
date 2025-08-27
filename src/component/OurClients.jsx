import React from "react";
import "../assets/css/OurClients.css";
import { CLIENTS } from "../data/db";

export default function OurClients() {
  return (
    <section className="clients-section my-5">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-12 col-md-4 text-center section-header d-flex flex-column justify-content-center">
            <span className="sub-title">Best Experience</span>
            <h2 className="text-white">
              <span className="yellow-text">Our </span>Clients
            </h2>
            <p className="text-white">
              Our area of practice is quite wide: design, graphics, branding, development.
            </p>
          </div>

          {/* Client logos */}
          <div className="col-12 col-md-8 d-flex flex-wrap">
            {CLIENTS.map((client, idx) => (
              <div className="col-3 col-md-2" key={idx}>
                <div className="client-item">
                  <a href={client.link || "#"} className="client-link">
                    <div className="client-img">
                      <img src={client.imgFront} alt={client.name} className="front" />
                      <img src={client.imgBack} alt={client.name} className="back" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
