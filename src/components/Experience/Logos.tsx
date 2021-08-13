import React, { useEffect, useRef } from "react";

import useLogoFadeObserver from "../../hooks/useLogoFadeObserver";

import stripeLogo from "../../static/stripe.png";
import bloombergLogo from "../../static/bloomberg.png";
import zapposLogo from "../../static/zappos.png";
import hmcLogo from "../../static/hmc.png";

type Props = {
  setCurrentLogo: (logo: string) => void;
};

export default function Logos({ setCurrentLogo }: Props) {
  // const didSetInitialLogoClass = useRef(false);

  const logosRef1 = useRef<HTMLDivElement>(null);
  const logosRef2 = useRef<HTMLDivElement>(null);
  const logosRef3 = useRef<HTMLDivElement>(null);

  const fadeObserver = useLogoFadeObserver(setCurrentLogo);

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

  useFadeEffect(logosRef1);
  useFadeEffect(logosRef2);
  useFadeEffect(logosRef3);

  // useEffect(() => {
  //   if (didSetInitialLogoClass.current) {
  //     return;
  //   }

  //   didSetInitialLogoClass.current = true;

  //   setTimeout(() => {
  //     if (logosRef1.current && logosRef2.current && logosRef3.current) {
  //       [logosRef1.current, logosRef2.current, logosRef3.current].forEach(
  //         (logosWrapper) => {
  //           const elBottom = logosWrapper.offsetTop + logosWrapper.offsetHeight;
  //           const viewportTop = document.documentElement.scrollTop;
  //           const viewportBottom = window.innerHeight + viewportTop;
  //           const child = logosWrapper.firstChild as HTMLElement;

  //           if (logosWrapper.offsetTop < viewportTop) {
  //             child.classList.add("above");
  //           } else if (elBottom > viewportBottom) {
  //             child.classList.add("below");
  //           } else {
  //             logosWrapper.classList.add("visible");
  //           }
  //         }
  //       );
  //     }
  //   }, 100);
  // }, [logosRef1, logosRef2, logosRef3]);

  return (
    <>
      <div className="logos-wrapper" ref={logosRef1} id="logoSet1">
        <div className="logos logos3">
          <img src={stripeLogo} alt="stripe" />
          <img src={bloombergLogo} alt="bloomberg" />
          <img src={zapposLogo} alt="zappos" />
        </div>
      </div>

      <div className="logos-wrapper" ref={logosRef2} id="logoSet2">
        <div className="logos logos1">
          <img src={hmcLogo} alt="hmc" />
        </div>
      </div>

      <div className="logos-wrapper" ref={logosRef3} id="logoSet3">
        <div className="logos logos1">
          <img src={hmcLogo} alt="hmc" />
        </div>
      </div>
    </>
  );
}
