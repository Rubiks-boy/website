import React, { useRef, useEffect } from "react";
import frontImage from "../static/img_2.jpeg";
import "./Page3.css";
import useOpacityObserver from "../hooks/useOpacityObserver";

const Page3 = () => {
  const imgContainer = useRef<HTMLDivElement>(null);

  const observer = useOpacityObserver({ threshold: 0.25 });

  useEffect(() => {
    const el = imgContainer.current;
    if (el) {
      observer.observe(el);
      return () => {
        observer.unobserve(el);
      };
    } else {
      return () => {};
    }
  }, [observer]);

  return (
    <div className="page3">
      <div className="slant slant--both">
        <div className="page3TextContainer align-vert">
          <div className="page3Text writeup">
            <h1>Something clever</h1>
            <p>subtext</p>
          </div>
        </div>
        <div className="img-container fade-when-in-view" ref={imgContainer}>
          <img src={frontImage} alt="Front page" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
