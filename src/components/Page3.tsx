import React from "react";
import frontImage from "../static/img_2.jpeg";
import "./Page3.css";

const Page3 = () => {
  return (
    <>
      <div className="page3">
        <div className="slant slant--both">
          <div className="page3TextContainer alignVert">
            <div className="page3Text writeup">
              <h1>Something clever</h1>
              <p>subtext</p>
            </div>
          </div>
          <div className="imgContainer">
            <img src={frontImage} alt="Front page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
