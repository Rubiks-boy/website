import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import useOpacityObserver from "../hooks/useOpacityObserver";

import frontImage from "../static/img_1.jpeg";
import "./FrontPage.css";

const FrontPage = () => {
  const [isLoaded, setLoaded] = useState(false);
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
    <div className={classNames("frontPageContainer", { loaded: isLoaded })}>
      <div className={"frontPage"}>
        <div className="slant">
          <div className="frontPageTextContainer alignVert">
            <div className="frontPageText writeup">
              <h1 className="slideAndFade">Adam Walker</h1>
              <div>
                <div className="line line--vert"></div>
                <p className="slideAndFade">Software Engineer</p>
                <p className="slideAndFade">Mudd 2022</p>
              </div>
            </div>
          </div>
          <div className="imgContainer fadeWhenInView" ref={imgContainer}>
            <div className="imgLoader">
              <img
                src={frontImage}
                onLoad={() => setLoaded(true)}
                alt="Adam Walker"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
