import React from "react";
import File from "../File/File";
import "./FileExplorer.css";

const FileExplorer = () => {
  return (
    <div className="fileexplorer-container">
      <h1>Files</h1>
      {/* index.html file component*/}
      <File name="index.html" />
      {/* index.css file component*/}
      <File name="index.css" />
      {/* index.js file component*/}
      <File name="index.js" />
    </div>
  );
};

export default FileExplorer;
