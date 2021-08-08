import React from "react";
import classNames from "classnames";

type Props = {
  currentLogo: string | null;
};

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

export default function Writeup({ currentLogo }: Props) {
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
}
