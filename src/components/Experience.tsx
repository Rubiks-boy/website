import React, { useEffect, useRef, useState, useMemo } from "react";
import classNames from "classnames";
import useFadeObserver from "./useFadeObserver";

import stripeLogo from "../static/stripe.png";
import bloombergLogo from "../static/bloomberg.png";
import zapposLogo from "../static/zappos.png";
import hmcLogo from "../static/hmc.png";

import "./Experience.css";

const ResumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
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

const ExperienceWriteup = ({ currentLogo }: { currentLogo: string | null }) => {
  const currentIndex = parseInt(
    currentLogo?.substring(currentLogo.length - 1) || "0"
  );

  return (
    <div className="writeup">
      <h3>Experience</h3>
      <div className="switchText">
        <p
          className={classNames({
            invisible: currentIndex < 1,
          })}
        >
          Experienced software engineer
        </p>
        <p className={classNames({ invisible: currentIndex < 2 })}>
          B.S. in Computer Science, 2022
        </p>
        <p className={classNames({ invisible: currentIndex < 3 })}>
          yeet yeet math math
        </p>
      </div>
      <p>
        <button type="button" className="resumeButton">
          <ResumeIcon />
          <div>Resume</div>
        </button>
      </p>
    </div>
  );
};

type Props = {
  fixOnScrollRef: React.RefObject<HTMLDivElement>;
};

const Experience = ({ fixOnScrollRef }: Props) => {
  const didSetInitialLogoClass = useRef(false);
  const logosRef1 = useRef<HTMLDivElement>(null);
  const logosRef2 = useRef<HTMLDivElement>(null);
  const logosRef3 = useRef<HTMLDivElement>(null);
  const topObserverRef = useRef<HTMLDivElement>(null);
  const bottomObserverRef = useRef<HTMLDivElement>(null);

  const [currentLogo, setCurrentLogo] = useState<string | null>(null);

  const fadeObserver = useFadeObserver(setCurrentLogo);

  const useFadeEffect = (logosRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      const ref = logosRef.current;
      if (ref) {
        fadeObserver.observe(ref);
        return () => {
          fadeObserver.unobserve(ref);
        };
      }
      return () => {};
    }, [logosRef]);
  };

  const topObserver = useMemo(() => {
    const topCallback = (entries: any) => {
      const { isIntersecting, boundingClientRect } = entries[0];
      console.log(isIntersecting, boundingClientRect);
      if (boundingClientRect.top > 100) {
        if (isIntersecting) {
          fixOnScrollRef.current?.classList.add("fixed");
        } else {
          fixOnScrollRef.current?.classList.remove("fixed");
        }
      }
    };

    return new IntersectionObserver(topCallback, {
      threshold: 1,
    });
  }, [fixOnScrollRef]);

  const bottomObserver = useMemo(() => {
    const bottomCallback = (entries: any) => {
      const { isIntersecting, boundingClientRect } = entries[0];
      if (boundingClientRect.top < 100) {
        if (isIntersecting) {
          fixOnScrollRef.current?.classList.add("fixed");
        } else {
          fixOnScrollRef.current?.classList.remove("fixed");
        }
      }
    };

    return new IntersectionObserver(bottomCallback, {
      threshold: 1,
    });
  }, [fixOnScrollRef]);

  useEffect(() => {
    const ref = topObserverRef.current;
    if (ref) {
      topObserver.observe(ref);
      return () => {
        topObserver.unobserve(ref);
      };
    }
    return () => {};
  }, [topObserver]);

  useEffect(() => {
    const ref = bottomObserverRef.current;
    if (ref) {
      bottomObserver.observe(ref);
      return () => {
        bottomObserver.unobserve(ref);
      };
    }
    return () => {};
  }, [bottomObserver]);

  useFadeEffect(logosRef1);
  useFadeEffect(logosRef2);
  useFadeEffect(logosRef3);

  useEffect(() => {
    if (didSetInitialLogoClass.current) {
      return;
    }

    if (logosRef1.current && logosRef2.current && logosRef3.current) {
      didSetInitialLogoClass.current = true;

      [logosRef1.current, logosRef2.current, logosRef3.current].forEach(
        (logosWrapper) => {
          const elBottom = logosWrapper.offsetTop + logosWrapper.offsetHeight;
          const viewportBottom = window.innerHeight + window.pageYOffset;
          const child = logosWrapper.firstChild as HTMLElement;
          console.log(child);

          if (logosWrapper.offsetTop < window.pageYOffset) {
            if (logosWrapper.firstChild) {
              console.log("above");
              child.classList.add("above");
            }
          } else if (elBottom > viewportBottom) {
            if (logosWrapper.firstChild) {
              console.log("below");
              child.classList.add("below");
            }
          } else {
            console.log("visible");
            logosWrapper.classList.add("visible");
          }
        }
      );
    }
  }, [logosRef1, logosRef2, logosRef3]);

  return (
    <div className="page">
      <div className="experience pageContent">
        <div className="experienceCol left">
          <div className="logosWrapper" ref={logosRef1} id="logoSet1">
            <div className="logos logos3">
              <img src={stripeLogo} alt="stripe" />
              <img src={bloombergLogo} alt="bloomberg" />
              <img src={zapposLogo} alt="zappos" />
            </div>
          </div>

          <div className="logosWrapper" ref={logosRef2} id="logoSet2">
            <div className="logos logos1">
              <img src={hmcLogo} alt="hmc" />
            </div>
          </div>

          <div className="logosWrapper" ref={logosRef3} id="logoSet3">
            <div className="logos logos1">
              <img src={hmcLogo} alt="hmc" />
            </div>
          </div>
        </div>

        <div className="experienceCol observer">
          <div className="top" ref={topObserverRef} />
          <div className="bottom" ref={bottomObserverRef} />
        </div>

        <div className="experienceCol right">
          <div className="stickyWriteup">
            <ExperienceWriteup currentLogo={currentLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
