import React, { useState } from "react";
import Observer from "./Observer";
import Writeup from "./Writeup";
import Logos from "./Logos";

import "./Experience.css";

type Props = {
  fixOnScrollRef: React.RefObject<HTMLDivElement>;
};

const Experience = ({ fixOnScrollRef }: Props) => {
  const [currentLogo, setCurrentLogo] = useState<string | null>(null);

  return (
    <div className="page">
      <div className="experience pageContent">
        <div className="experienceCol left">
          <Logos setCurrentLogo={setCurrentLogo} />
        </div>

        <Observer fixOnScrollRef={fixOnScrollRef} />

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
