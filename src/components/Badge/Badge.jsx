import React from "react";
import "./Badge.css";

const Badge = ({ Icon, title }) => {
  return (
    <span className="badge">
      <Icon />
      {title}
    </span>
  );
};

export default Badge;
