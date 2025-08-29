import React, { useEffect } from "react";
import AOS from "aos";
import "../assets/css/home/OurClients.css";
import { AOS_CONFIG } from "../data/constants";

export default function OurClients() {
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  return (
    <section className="clients-section my-5 py-5 bg-white">
      <div className="container" {...AOS_CONFIG.fade}>
        {/* Heading */}
        <div className="text-center section-header d-flex flex-column justify-content-center mb-4">
          <span className="sub-title text-secondary">Best Experience</span>
          <h2 className="text-secondary-emphasis">
            <span className="yellow-text">Our </span>Clients
          </h2>
        </div>

        {/*logos*/}
        <img src="/images/home/all-clients.svg" alt="clients-logo" />
      </div>
    </section>
  );
}
