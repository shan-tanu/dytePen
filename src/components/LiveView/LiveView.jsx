import React from "react";
import "./LiveView.css";

const LiveView = ({ html, css, js }) => {
  return (
    <div className="liveview-container">
      <h1>Live view</h1>
      <div className="display"></div>
    </div>
  );
};

export default LiveView;
