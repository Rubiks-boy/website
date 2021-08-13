import { useRef, useEffect } from "react";
import frontImage from "../static/img_2.jpeg";
import useOpacityObserver from "../hooks/useOpacityObserver";

import "./Projects.css";

const Projects = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const observer = useOpacityObserver({ threshold: 0.2 });

  useEffect(() => {
    const el = imgContainerRef.current;
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
    <div className="projects">
      <div className="slant slant--top">
        <div className="projectsTextContainer align-vert">
          <div className="projectsText writeup">
            <h1>Projects</h1>
          </div>
        </div>
        <div className="parallax">
          <div
            className="img-container fade-when-in-view"
            ref={imgContainerRef}
          >
            <img src={frontImage} alt="Front page" />
          </div>
        </div>
      </div>
      <div className="projectsContent"></div>
    </div>
  );
};

export default Projects;
