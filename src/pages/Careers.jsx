import React from "react";
import PageHeader from "../component/PageHeader";
import ContactForm from "../component/ContactForm";
import CareerForm from "../component/CareerForm";

export default function Careers() {
  return (
    <section className="about-section">
      <PageHeader
        title="Be a Part of Our Mission"
        backgroundImage={"/images/about/about-header.jpg"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Careers" }]}
      />

      <div className="container text-center col-12 col-md-8 my-5">
        <h2 className="yellow-text mb-3">Share Your CV With Us</h2>
        <p className="text-white">
          We may not have active job openings right now, but we’re always looking for talented
          people. Submit your details and CV, and we’ll reach out to you when a suitable opportunity
          becomes available.
        </p>
        <CareerForm />
      </div>
    </section>
  );
}
