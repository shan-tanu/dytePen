import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FileExplorer from "../FileExplorer/FileExplorer";
import LiveView from "../LiveView/LiveView";
import CodeEditor from "../CodeEditor/CodeEditor";
import "./App.css";

const defaultState = {
  html: "<!--HTML File-->",
  css: "/*CSS File*/",
  js: "//JS File",
  open: "html",
};

class App extends Component {
  state = defaultState;

  htmlHandler = (code) => {
    this.setState({ html: code });
  };

  cssHandler = (code) => {
    this.setState({ css: code });
  };
  jsHandler = (code) => {
    this.setState({ js: code });
  };

  selectHandler = (open) => {
    this.setState({ open: open });
  };

  render() {
    console.log("html\t", this.state.html);
    return (
      <div className="app-container">
        <Header />
        <div className="main">
          <FileExplorer select={this.selectHandler} />
          <CodeEditor
            htmlHandler={this.htmlHandler}
            cssHandler={this.cssHandler}
            jsHandler={this.jsHandler}
            open={this.state.open}
            html={this.state.html}
            css={this.state.css}
            js={this.state.js}
          />
          <LiveView
            html={this.state.html}
            css={this.state.css}
            js={this.state.js}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
