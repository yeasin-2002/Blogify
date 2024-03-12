import { useEffect, useState } from "react";

type Options = {
  element: React.MutableRefObject<HTMLDivElement | null>;
};

export const useIntersectionObserver = ({ element }: Options) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((ent) => {
      setInView(ent[0].isIntersecting);
    });
    element?.current && observer.observe(element?.current);

    () => {
      observer.disconnect();
    };
  }, [element]);

  return inView;
};
