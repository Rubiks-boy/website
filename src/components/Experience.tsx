import React, { useEffect, useRef } from "react";

import { FixedOnScrollBeginning, FixedOnScrollEnd } from "./FixedOnScroll";
import useFadeObserver from "./useFadeObserver";

import stripeLogo from "../static/stripe.png";
import bloombergLogo from "../static/bloomberg.png";
import zapposLogo from "../static/zappos.png";
import hmcLogo from "../static/hmc.png";

import "./Experience.css";

const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
  >
    <g>
      <rect fill="none" height="24" width="24" />
      <g>
        <path d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
      </g>
      <path d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
    </g>
  </svg>
);

const ExperienceWriteup = () => (
  <div className="writeup">
    <h1>Experience</h1>
    <p>I guess I have experience</p>
    <p>I'm a legend</p>
    <p>yeet yeet math math</p>
    <p>
      <button type="button" className="resumeButton">
        <ResumeIcon />
        <div>Resume</div>
      </button>
    </p>
  </div>
);

type Props = {
  fixOnScrollRef: React.RefObject<HTMLDivElement>;
};

const Experience = ({ fixOnScrollRef }: Props) => {
  const logosRef1 = useRef<HTMLDivElement>(null);
  const logosRef2 = useRef<HTMLDivElement>(null);
  const logosRef3 = useRef<HTMLDivElement>(null);

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
  useEffect(() => {
    if (logosRef3.current) {
      fadeObserver.observe(logosRef3.current);
    }
  }, [fadeObserver, logosRef3]);

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
            <ExperienceWriteup />
          </FixedOnScrollBeginning>
        </div>
        <div className="experienceRow">
          <div className="logosWrapper" ref={logosRef2}>
            <div className="logos logos1 below">
              <img src={hmcLogo} alt="hmc" />
            </div>
          </div>
          <div className="fake">
            <ExperienceWriteup />
          </div>
        </div>
        <div className="experienceRow">
          <div className="logosWrapper" ref={logosRef3}>
            <div className="logos logos1 below">
              <img src={hmcLogo} alt="hmc" />
            </div>
          </div>
          <FixedOnScrollEnd fixOnScrollRef={fixOnScrollRef}>
            <ExperienceWriteup />
          </FixedOnScrollEnd>
        </div>
      </div>
    </div>
  );
};

export default Experience;
