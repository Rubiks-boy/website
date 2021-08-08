import { useMemo } from "react";

type Props = {
  threshold: number;
};

const callback = (entries: any) => {
  entries.forEach((entry: any) => {
    const { target, isIntersecting } = entry;

    if (isIntersecting) {
      target.classList.add("visible");
    } else {
      target.classList.remove("visible");
    }
  });
};

const useOpacityObserver = ({ threshold }: Props): IntersectionObserver => {
  return useMemo(
    () => new IntersectionObserver(callback, { threshold }),
    [threshold]
  );
};

export default useOpacityObserver;
