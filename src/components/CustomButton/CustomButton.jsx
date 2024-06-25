import React from "react";
import "./CustomButton.css";

const CustomButton = ({ url, Icon, title }) => {
  return (
    <a
      className="custom-button-link"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <button className="custom-button">
        <Icon />
        {title}
      </button>
    </a>
  );
};

export default CustomButton;
