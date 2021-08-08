import React, { useState, useRef, useEffect } from "react";
import frontImage from "../static/img_2.jpeg";
import useOpacityObserver from "../hooks/useOpacityObserver";

import "./Projects.css";

const Projects = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    undefined
  );

  const observer = useOpacityObserver({ threshold: 0.0 });

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

  useEffect(() => {
    const parallax = (scrollPos: number) => {
      const imgContainer = imgContainerRef.current;
      const projects = projectsRef.current;
      if (imgContainer && projects) {
        const { offsetTop } = projects;
        const { offsetHeight } = imgContainer;
        const elBottom = offsetTop + offsetHeight;
        const viewportHeight = window.innerHeight;

        if (elBottom < scrollPos + viewportHeight) {
          const px = scrollPos + viewportHeight - elBottom;
          imgContainer.style.transform = `translateY(${px}px)`;
          console.log(`translateY(${px}px)`);

          const percent =
            (scrollPos + viewportHeight - elBottom) / viewportHeight;
          const begColor = [6, 172, 254];
          const endColor = [0, 0, 0];

          const currColor = begColor.map((c, i) => {
            const diff = endColor[i] - begColor[i];
            return begColor[i] + diff * percent;
          });
          setBackgroundColor(`rgb(${currColor.join(",")})`);
        }
      }
    };

    window.addEventListener("scroll", () => {
      parallax(window.pageYOffset);
    });
  }, []);

  return (
    <>
      <div className="projects" ref={projectsRef}>
        <div className="slant slant--top" style={{ backgroundColor }}>
          <div className="projectsTextContainer alignVert">
            <div className="projectsText writeup">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="imgContainer fadeWhenInView" ref={imgContainerRef}>
            <img src={frontImage} alt="Front page" />
          </div>
        </div>
        <div className="projectsContent" style={{ backgroundColor }}></div>
      </div>
      <div className="space"></div>
    </>
  );
};

export default Projects;
