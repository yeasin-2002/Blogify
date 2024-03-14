import { useEffect, useState } from "react";

export const useIntersectionObserver = ({ element }) => {
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
