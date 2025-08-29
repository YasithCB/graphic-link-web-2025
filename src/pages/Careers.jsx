import React, { useEffect } from "react";
import AOS from "aos";

import PageHeader from "../component/PageHeader";
import CareerForm from "../component/CareerForm";
import { AOS_CONFIG } from "../data/constants";

export default function Careers() {
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  return (
    <section className="about-section">
      <PageHeader
        title="Be a Part of Our Mission"
        backgroundImage={"/images/about/about-header.jpg"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Careers" }]}
      />

      <div className="container text-center col-12 col-md-8 my-5">
        <h2 className="yellow-text mb-3" {...AOS_CONFIG.zoom}>
          Share Your CV With Us
        </h2>
        <p className="text-white" {...AOS_CONFIG.fade}>
          We may not have active job openings right now, but we’re always looking for talented
          people. Submit your details and CV, and we’ll reach out to you when a suitable opportunity
          becomes available.
        </p>
        <CareerForm />
      </div>
    </section>
  );
}
