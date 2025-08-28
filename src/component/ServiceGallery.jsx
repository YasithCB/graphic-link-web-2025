import "../assets/css/services/ServiceGallery.css";

export default function ServiceGallery() {
  const galleryItems = [
    {
      title: "Business Card",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/black-border-logo.jpg",
    },
    {
      title: "Brochure",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/images-5.jpeg",
    },
    {
      title: "Flyer",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/business_flyer_FKGL9GR.jpeg",
    },
    {
      title: "Mug Printing",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/64e718ebaaaef55fa3814bff_half_coloured_mug_printing_dubai_01.jpg",
    },
    {
      title: "Bottle Printing",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/bottlemetal2.png",
    },
    {
      title: "T-Shirt Printing",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/images-7.jpeg",
    },
    {
      title: "Flag",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/L-Shape-Flag-Printing-Dubai.jpg",
    },
    {
      title: "ID Card",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/ID-Card-Mockup.jpg",
    },
    {
      title: "Digital Sticker",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Vinyl-printing-and-Shop-Branding-in-Dubai-1.webp",
    },
    {
      title: "Office Item",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Rich_Stationery_Mockup-1.jpg",
    },
    {
      title: "Box & Packing",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/9bbdd66030045951e2efed06b0dcf747.jpg",
    },
    {
      title: "Shop Signage",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Hanging-Rectangle-Sing-Mockup-D.jpg",
    },
    {
      title: "Vehicle Graphics",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Free-Van-Car-Branding-Mockup-PSD.jpg",
    },
    {
      title: "USB",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Free-USB-Memory-Stick-Mockup-PSD-Set-1.jpg",
    },
    {
      title: "Cotton Bag",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/free-bag-with-short-handles-mockup-960x640-1.jpg",
    },
    {
      title: "Memento",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/360_F_1222318741_W4PMuaAChwexPoMwvgdnzOKRPqnGzIno.jpg",
    },
    {
      title: "Medal",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/istockphoto-589113884-170667a.jpg",
    },
    {
      title: "ACP & Acrylic Signage",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Transparent-Indoor-Sign-Mockup.jpg",
    },
    {
      title: "Cap Printing",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Embroidery-Cap-Mockup-1.jpg",
    },
    {
      title: "Bag",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/48ec2b0b12bb8d39c4bc48dc73601781.jpg",
    },
    {
      title: "Digital Sticker",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Construction-Helmet-Mockup-2.jpg",
    },
    {
      title: "Exhibition Stand",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/images-9.jpeg",
    },
    {
      title: "Wooden Signage",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/Exhibition-Stand-Mockup.jpg",
    },
    {
      title: "Name Plate",
      img: "https://avmforprinting.ae/wp-content/uploads/2025/05/images-11.jpeg",
    },
  ];

  return (
    <section className="gallery-section container">
      <div className="container-fluid">
        <div className="row">
          {galleryItems.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="item">
                <div className="img">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="cont">
                  <h5 className="text-white">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
