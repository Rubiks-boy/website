import { useMemo } from "react";

const callback = (setLogoVisible: (id: string) => void) => (entries: any) => {
  entries.forEach((entry: any) => {
    const { target, isIntersecting, boundingClientRect, rootBounds } = entry;

    const logosDiv = target.firstChild;
    const position = target.id;

    if (isIntersecting) {
      target.classList.add("visible");
      logosDiv.style.transform = "translateY(0)";
      setLogoVisible(position);
    } else {
      target.classList.remove("visible");

      if (boundingClientRect.top < 0) {
        logosDiv.style.transform = `translateY(-${rootBounds.height / 2}px)`;
        logosDiv.classList.add("above");
        logosDiv.classList.remove("below");
      } else {
        logosDiv.style.transform = `translateY(${rootBounds.height / 2}px)`;
        logosDiv.classList.add("below");
        logosDiv.classList.remove("above");
      }
    }
  });
};

const useFadeObserver = (
  setLogoVisible: (id: string) => void
): IntersectionObserver => {
  return useMemo(
    () =>
      new IntersectionObserver(callback(setLogoVisible), {
        threshold: 1,
      }),
    [setLogoVisible]
  );
};

export default useFadeObserver;
