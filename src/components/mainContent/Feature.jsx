import React from "react";

const Feature = ({ header, text, img, isImgLeft }) => (
  <div className="feature-item">
    {isImgLeft && (
          <div className="feature-item-image">
          <img
            id="multi-platform"
            src={img}
            alt="Multi Platform"
          />
        </div>
    )}
    <div className="feature-item-text">
      <h3>{header}</h3>
      <p>{text}</p>
    </div>
    {!isImgLeft && (
          <div className="feature-item-image">
          <img
            id="multi-platform"
            src={img}
            alt="Multi Platform"
          />
        </div>
    )}
  </div>
);

export default Feature;
