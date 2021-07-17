import React from "react";
import "./CodeEditor.css";

const CodeEditor = ({
  htmlHandler,
  cssHandler,
  jsHandler,
  open,
  html,
  css,
  js,
}) => {
  const handler =
    open === "html" ? htmlHandler : open === "css" ? cssHandler : jsHandler;
  const existing = open === "html" ? html : open === "css" ? css : js;
  return (
    <div className="codeeditor-container">
      <h1>CodeEditor</h1>
      <textarea
        value={existing}
        className="code-text"
        onChange={(e) => handler(e.target.value)}
      ></textarea>
    </div>
  );
};

export default CodeEditor;
