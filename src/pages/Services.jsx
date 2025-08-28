import "swiper/css";
import "../assets/css/services/Services.css";
import PageHeader from "../component/PageHeader";
import React from "react";
import ServiceCategorySlider from "../component/ServiceCategorySlider";
import ServiceGallery from "../component/ServiceGallery";

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        backgroundImage={"/images/services/services-header.jpg"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />

      <ServiceCategorySlider />
      <ServiceGallery />
    </div>
  );
}
