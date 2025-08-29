import React from "react";
import PersonCardLandscape from "./PersonCardLandscape";

export default function TeamSlider({ list }) {
  return (
    <div className="overflow-hidden w-full">
      <div className="row justify-content-between">
        {list.map((member, index) => (
          <PersonCardLandscape
            key={index}
            name={member.name}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
