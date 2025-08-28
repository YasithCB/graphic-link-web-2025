import React from "react";
import "../assets/css/OurClients.css";
import { CLIENTS } from "../data/db";

export default function OurClients() {
  return (
    <section className="clients-section my-5 py-5 bg-white">
      <div className="container">
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
