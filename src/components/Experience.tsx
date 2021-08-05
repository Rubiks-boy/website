import React, { useEffect, useRef } from "react";

import stripeLogo from "../static/stripe.png";
import bloombergLogo from "../static/bloomberg.png";
import zapposLogo from "../static/zappos.png";
import hmcLogo from "../static/hmc.png";
import useFadeObserver from "./useFadeObserver";
import { FixedOnScrollBeginning, FixedOnScrollEnd } from "./FixedOnScroll";

import "./Experience.css";

const experienceWriteup = () => (
  <div className="writeup">
    <h1>Experience</h1>
    <p>I guess I have experience</p>
    <p>I'm a legend</p>
    <p>yeet yeet math math</p>
  </div>
);

type Props = {
  fixOnScrollRef: React.RefObject<HTMLDivElement>;
};

const Experience = ({ fixOnScrollRef }: Props) => {
  const logosRef1 = useRef<HTMLDivElement>(null);
  const logosRef2 = useRef<HTMLDivElement>(null);

  const fadeObserver = useFadeObserver();

  useEffect(() => {
    if (logosRef1.current) {
      fadeObserver.observe(logosRef1.current);
    }
  }, [fadeObserver, logosRef1]);
  useEffect(() => {
    if (logosRef2.current) {
      fadeObserver.observe(logosRef2.current);
    }
  }, [fadeObserver, logosRef2]);

  return (
    <div className="page">
      <div className="experience pageContent">
        <div className="experienceRow">
          <div className="logosWrapper" ref={logosRef1}>
            <div className="logos logos3 below">
              <img src={stripeLogo} alt="stripe" />
              <img src={bloombergLogo} alt="bloomberg" />
              <img src={zapposLogo} alt="zappos" />
            </div>
          </div>
          <FixedOnScrollBeginning fixOnScrollRef={fixOnScrollRef}>
            {experienceWriteup()}
          </FixedOnScrollBeginning>
        </div>
        <div className="experienceRow">
          <div className="logosWrapper" ref={logosRef2}>
            <div className="logos logos1 below">
              <img src={hmcLogo} alt="hmc" />
            </div>
          </div>
          <FixedOnScrollEnd fixOnScrollRef={fixOnScrollRef}>
            {experienceWriteup()}
          </FixedOnScrollEnd>
        </div>
      </div>
    </div>
  );
};

export default Experience;
