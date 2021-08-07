import React, { useState } from "react";
import classNames from "classnames";
import frontImage from "../static/img_1.jpeg";
import "./FrontPage.css";

const FrontPage = () => {
  const [isLoaded, setLoaded] = useState(false);

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
          <div className="imgContainer">
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
