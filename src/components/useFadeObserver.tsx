const callback = (entries: any) => {
  const { target, isIntersecting, boundingClientRect, rootBounds } = entries[0];

  const logosDiv = target.firstChild;

  if (isIntersecting) {
    target.classList.add("visible");
    logosDiv.style.transform = "translateY(0)";
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
};

const useFadeObserver = (): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    threshold: 1,
  });
};

export default useFadeObserver;
