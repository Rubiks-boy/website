import React, { useEffect, useRef } from "react";

import "./Observer.css";

type Props = {
  fixOnScrollRef: React.RefObject<HTMLDivElement>;
};

const createObserver = (
  fixOnScrollRef: React.RefObject<HTMLDivElement>,
  condition: (top: number) => boolean
) => {
  const callback = (entries: any) => {
    const { isIntersecting, boundingClientRect } = entries[0];
    if (condition(boundingClientRect.top)) {
      if (isIntersecting) {
        fixOnScrollRef.current?.classList.add("fixed");
      } else {
        fixOnScrollRef.current?.classList.remove("fixed");
      }
    }
  };

  return new IntersectionObserver(callback, {
    threshold: 1,
  });
};

export default function ExperienceObserver({ fixOnScrollRef }: Props) {
  const topObserverRef = useRef<HTMLDivElement>(null);
  const bottomObserverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topObserver = createObserver(
      fixOnScrollRef,
      (top: number) => top > 100
    );
    const ref = topObserverRef.current;
    if (ref) {
      topObserver.observe(ref);
      return () => {
        topObserver.unobserve(ref);
      };
    }
    return () => {};
  }, [fixOnScrollRef]);

  useEffect(() => {
    const bottomObserver = createObserver(
      fixOnScrollRef,
      (top: number) => top < 100
    );
    const ref = bottomObserverRef.current;
    if (ref) {
      bottomObserver.observe(ref);
      return () => {
        bottomObserver.unobserve(ref);
      };
    }
    return () => {};
  }, [fixOnScrollRef]);

  return (
    <div className="experienceObserver">
      <div className="top" ref={topObserverRef} />
      <div className="bottom" ref={bottomObserverRef} />
    </div>
  );
}
