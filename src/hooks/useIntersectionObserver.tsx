import { useEffect, useState } from "react";

type Options = {
  element: React.MutableRefObject<HTMLDivElement | null>;
};

export const useIntersectionObserver = ({ element }: Options) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((ent) => {
      if (ent[0].isIntersecting) {
        setInView(true);
      }
    });
    element?.current && observer.observe(element?.current);

    () => {
      observer.disconnect();
    };
  }, [element]);

  return inView;
};
