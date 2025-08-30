import React from "react";

export default function PersonCardLandscape({ name, description, imageUrl }) {
  return (
    <div className="about-author d-flex flex-column align-items-center col-12 col-sm-6 col-md-4 cursor-pointer mb-4">
      <div className="img-square mb-3">
        <img src={imageUrl} alt={name} className="img-fluid rounded" />
      </div>
      <div className="text-center">
        <h5>{name}</h5>
        <p className="text-white-50">{description}</p>
      </div>
    </div>
  );
}
