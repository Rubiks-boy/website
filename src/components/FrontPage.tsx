import React from "react";
import frontImage from "../static/img_1.jpeg";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div className="frontPage">
      <div className="slant">
        <div className="frontPageTextContainer alignVert">
          <div className="frontPageText writeup">
            <h1 className="slideAndFade">Adam Walker</h1>
            <div className="line line--horiz"></div>
            <div>
              <div className="line line--vert"></div>
              <h3 className="slideAndFade">Software Engineer</h3>
              <h3 className="slideAndFade">Mudd 2022</h3>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <div className="imgLoader">
            <img src={frontImage} alt="Adam Walker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
