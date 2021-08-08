import React from "react";
import FrontPage from "./components/FrontPage";
import Experience from "./components/Experience";
import Page3 from "./components/Page3";
import Projects from "./components/Projects";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <FrontPage />
      <Experience />
      <Page3 />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
