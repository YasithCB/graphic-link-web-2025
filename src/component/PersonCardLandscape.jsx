import React from "react";

export default function PersonCardLandscape({ name, description, imageUrl }) {
  return (
    <div className="about-author d-flex p-4 col-md-6 cursor-pointer">
      <div className="img-square">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="desc text-left">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
