import React, { useEffect, useMemo, useRef } from "react";

import "./FixOnScroll.css";

type Props = {
  children: React.ReactNode;
  fixOnScrollRef: React.RefObject<HTMLDivElement>;
};

export const FixedOnScrollBeginning = ({ fixOnScrollRef, children }: Props) => {
  const begFakeRef = useRef<HTMLDivElement>(null);

  const observer = useMemo(() => {
    const callback = (entries: any) => {
      const { isIntersecting, boundingClientRect } = entries[0];
      if (fixOnScrollRef.current) {
        if (isIntersecting) {
          fixOnScrollRef.current.classList.add("fixed");
        } else if (boundingClientRect.top > 0) {
          // we scrolled up above the current page
          fixOnScrollRef.current.classList.remove("fixed");
        }
      }
    };
    return new IntersectionObserver(callback, {
      threshold: 1,
    });
  }, [fixOnScrollRef]);

  useEffect(() => {
    if (begFakeRef.current) {
      observer.observe(begFakeRef.current);
    }
  }, [observer, begFakeRef]);

  return (
    <div>
      <div className="fixOnScroll-fake-container">
        <div className="fixOnScroll-fake">
          <div className="fixOnScroll-fakeinner" ref={begFakeRef}></div>
        </div>
        {children}
      </div>
      <div className="fixOnScroll-fixed">{children}</div>
    </div>
  );
};

export const FixedOnScrollEnd = ({ fixOnScrollRef, children }: Props) => {
  const begFakeRef = useRef<HTMLDivElement>(null);

  const observer = useMemo(() => {
    const callback = (entries: any) => {
      const { isIntersecting, boundingClientRect } = entries[0];
      if (fixOnScrollRef.current) {
        if (isIntersecting) {
          fixOnScrollRef.current.classList.add("fixed");
        } else if (boundingClientRect.top < 0) {
          // we scrolled below the current page
          fixOnScrollRef.current.classList.remove("fixed");
        }
      }
    };
    return new IntersectionObserver(callback, {
      threshold: 1,
    });
  }, [fixOnScrollRef]);

  useEffect(() => {
    if (begFakeRef.current) {
      observer.observe(begFakeRef.current);
    }
  }, [observer, begFakeRef]);

  return (
    <>
      <div className="fixOnScroll-fake-container">
        <div className="fixOnScroll-fake">
          <div className="fixOnScroll-fakeinner end" ref={begFakeRef}></div>
        </div>
        {children}
      </div>
    </>
  );
};
