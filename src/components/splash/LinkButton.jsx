import React from "react";

const LinkButton = ({ header, subHeader, link }) => (
  <div>
    <a className="linkbutton" href={link}>
      <div>{header}</div>
      <div>{subHeader}</div>
    </a>
  </div>
);

export default LinkButton;
