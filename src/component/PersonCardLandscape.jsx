import React from "react";

export default function PersonCardLandscape({ name, description, imageUrl }) {
  return (
    <div className="about-author d-flex gap-4 p-4 col-md-6 cursor-pointer">
      <div className="img-square">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="d-flex flex-column align-items-start justify-content-center">
        <h3>{name}</h3>
        <p className="m-0 text-right">{description}</p>
      </div>
    </div>
  );
}
