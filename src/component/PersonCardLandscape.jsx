import React from "react";

export default function PersonCardLandscape({ name, description, imageUrl }) {
  return (
    <div className="about-author d-flex flex-column align-items-center col-6 col-md cursor-pointer">
      <div className="img-square mb-3">
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <h5>{name}</h5>
        <p className="text-white-50">{description}</p>
      </div>
    </div>
  );
}
