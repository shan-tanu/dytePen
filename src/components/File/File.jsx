import React from "react";
import "./File.css";

const File = ({ name }) => {
  return (
    <div className="file-container">
      <p>{name}</p>
    </div>
  );
};

export default File;
