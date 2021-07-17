import React from "react";
import "./File.css";

const File = ({ name, select, open }) => {
  return (
    <div className="file-container" onClick={(e) => select(open)}>
      <p>{name}</p>
    </div>
  );
};

export default File;
