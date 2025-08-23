import React from "react";

export default function PersonCardLandscape({ name, description, imageUrl }) {
  return (
    <div className="about-author d-flex p-4 col-md-6 cursor-pointer">
      <div className="bio mr-5">
        <img src={imageUrl} alt={name} className="img-fluid mb-4" />
      </div>
      <div className="desc text-left">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
