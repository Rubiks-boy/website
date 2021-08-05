import React, { useRef } from "react";
import FrontPage from "./components/FrontPage";
import Experience from "./components/Experience";
import Page3 from "./components/Page3";

import "./App.css";

const App = () => {
  const fixOnScrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <div className="fixOnScroll" ref={fixOnScrollRef}>
        <FrontPage />
        <Experience fixOnScrollRef={fixOnScrollRef} />
        <Page3 />
      </div>
    </div>
  );
};

export default App;
