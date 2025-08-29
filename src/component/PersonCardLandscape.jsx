import React from "react";

export default function PersonCardLandscape({ name, description, imageUrl }) {
  return (
    <div className="about-author d-flex flex-column gap-4 p-4 col-6 col-md-2 cursor-pointer">
      <div className="img-square">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="">
        <h3>{name}</h3>
        <p className="m-0 text-right">{description}</p>
      </div>
    </div>
  );
}
