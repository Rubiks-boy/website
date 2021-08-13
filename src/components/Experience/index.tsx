import React, { useState } from "react";
import Writeup from "./Writeup";
import Logos from "./Logos";

import "./Experience.css";

const Experience = () => {
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);

  return (
    <div className="page">
      <div className="experience page-content">
        <div className="experienceCol left">
          <Logos setCurrentLogo={setCurrentLogo} />
        </div>
        <div className="experienceCol right">
          <div className="stickyWriteup">
            <Writeup currentLogo={currentLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
