// ServicesGrid.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "../assets/css/services/ServiceGrid.css";
import {
  FaCube,
  FaTruck,
  FaPrint,
  FaPalette,
  FaTshirt,
  FaGift,
  FaSign,
  FaBuilding,
} from "react-icons/fa";
import { AOS_CONFIG } from "../data/constants";

const services = [
  {
    icon: <FaCube />,
    title: "3D Signage",
    items: ["3D Acrylic Signs", "Stainless Steel Signs", "3D Wooden Signs"],
  },
  {
    icon: <FaTruck />,
    title: "Vehicle Graphics",
    items: ["Vehicle Branding", "Truck Branding", "Delivery Bike Branding"],
  },
  {
    icon: <FaPalette />,
    title: "Design Services",
    items: [
      "Logo Design",
      "Corporate Identity Design",
      "Company Profile",
      "Website Design",
      "Social Media Post",
      "Sign Boards",
    ],
  },
  {
    icon: <FaPrint />,
    title: "Large Printing",
    items: [
      "LARGE SCALE POSTER PRINTING",
      "VINYL STICKER (pvc)",
      "CLEAR STICKER (pVC)",
      "VEHICLE GRAPHICS (pvc)",
      "FROSTED GLASS STICKER",
      "Reflective Sticker",
      "BANNER",
      "CANVAS",
      "ROLLUP",
      "POPUP",
      "LAMA STAND",
      "Mesh Banner Material",
      "Backlit Film",
      "One-way Vision",
      "AUTOCAD PLOTTING",
      "FLAGS SYNTHETIC, Polyester",
      "Printable Wallpaper",
      "Printable Magnetic Sheets",
      "Floor Coverings",
      "Window Film",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Exhibition Stands",
    items: ["Rollup Stands", "Popup Stands", "Display Stands"],
  },
  {
    icon: <FaTshirt />,
    title: "T-shirt Printing",
    items: ["Screen Printing", "Heat Transfer", "Embroidery"],
  },
  {
    icon: <FaGift />,
    title: "Promotional Items",
    items: [
      "Plastic card",
      "Pen Printing",
      "Lanyard",
      "Printing on Balloons",
      "T-shirts",
      "Pen, key Chain, Gift Cards, Mug Printing",
    ],
  },
  {
    icon: <FaSign />,
    title: "Indoor & Outdoor Signs",
    items: [
      "Office Name Plates",
      "Direction Signs",
      "Hanging Signs",
      "Shop Signage",
      "Hoarding",
      "Banners",
      "3D Signs",
      "Pole Sign",
    ],
  },
];

export default function ServicesGrid() {
  useEffect(() => {
    AOS.init(AOS_CONFIG.global);
  }, []);

  return (
    <div className="container">
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${service.title === "Large Printing" ? "large-service" : ""}`}
            {...AOS_CONFIG.zoom}
          >
            <div className="row align-items-center mb-3">
              <div className="icon-bg col-1">{service.icon}</div>
              <h4 className="col m-0">{service.title}</h4>
            </div>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="row my-5 no-gutters align-items-center" {...AOS_CONFIG.fade}>
        {/*img*/}
        <div
          className="col order-md-last img d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url(/images/home/hero-5.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "-webkit-fill-available",
          }}
        ></div>

        {/*text*/}
        <div className="col-md-6 col-12">
          <div className="text">
            <div className="px-4 py-5">
              <div className="desc text-md-right text-white">
                <div className="absolute">
                  <p className="fs-5">
                    Signage In Abu Dhbai, <br />
                    we have extensive experience with Signage designs, either it is indoor signage,
                    commercial signage, industrial signage, digital signage or outdoor signage we
                    have a different plan according to you needs.
                    <br />
                    We have designed and constructed many building signs and exhibition stands as
                    well varying from small space up to full feature-rich business exhibitions
                    stands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
