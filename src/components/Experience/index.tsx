import React, { useState } from "react";
import Writeup from "./Writeup";
import Logos from "./Logos";

import "./index.css";

const Experience = () => {
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);

  return (
    <div className="page">
      <div className="experience page-content">
        <div className="experience-col left">
          <Logos setCurrentLogo={setCurrentLogo} />
        </div>
        <div className="experience-col right">
          <div className="sticky-writeup">
            <Writeup currentLogo={currentLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
