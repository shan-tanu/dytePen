import React from "react";
import File from "../File/File";
import "./FileExplorer.css";

const FileExplorer = ({ select }) => {
  return (
    <div className="fileexplorer-container">
      <h1>Files</h1>
      {/* index.html file component*/}
      <File name="index.html" open="html" select={select} />
      {/* index.css file component*/}
      <File name="index.css" open="css" select={select} />
      {/* index.js file component*/}
      <File name="index.js" open="js" select={select} />
    </div>
  );
};

export default FileExplorer;
