import React from "react";
import PageHeader from "../component/PageHeader";

export default function Careers() {
  return (
    <section className="about-section">
      <PageHeader
        title="Be a Part of Our Mission"
        backgroundImage={"/images/about/about-header.jpg"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Careers" }]}
      />

      <div className="container text-center my-5">
        <h2 className="yellow-text mb-3">No Openings At The Moment</h2>
        <p className="text-white">
          We may not have active job openings right now, but we’d love to hear from you! Feel free
          to get in touch with us for future opportunities or general inquiries.
        </p>
      </div>
    </section>
  );
}
