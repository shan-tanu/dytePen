import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FileExplorer from "../FileExplorer/FileExplorer";
import LiveView from "../LiveView/LiveView";
import CodeEditor from "../CodeEditor/CodeEditor";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="main">
          <FileExplorer />
          <CodeEditor />
          <LiveView />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
