import "swiper/css";
import "../assets/css/services/Services.css";
import PageHeader from "../component/PageHeader";
import React from "react";
import ServiceCategorySlider from "../component/ServiceCategorySlider";
import ServiceGallery from "../component/ServiceGallery";
import ServicesGrid from "../component/ServiceGrid";

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        backgroundImage={"/images/home/hero-2.png"}
        breadcrumb={[{ label: "Home", link: "/" }, { label: "Services" }]}
      />

      <ServiceCategorySlider />
      {/*<ServiceGallery />*/}
      <ServicesGrid />
    </div>
  );
}
