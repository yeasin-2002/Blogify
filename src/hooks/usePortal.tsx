import { Cross } from "@/components";
import { cn } from "@/utils";
import type { ReactNode, ReactPortal } from "react";

import { useState } from "react";
import { createPortal } from "react-dom";

export const usePortal = (defaultShow = false, title = "") => {
  const [isShowPortal, setIsShowPortal] = useState(defaultShow);
  // const wrapper = useMemo(() => document.createElement("div"), []);

  // useEffect(() => {
  //   document.body.appendChild(wrapper);

  //   return () => {
  //     document.body.removeChild(wrapper);
  //   };
  // }, []);

  const renter = (children: ReactNode): ReactPortal | null => {
    if (!isShowPortal) return null;
    return createPortal(
      <div
        className={cn(
          "fixed left-0 top-0  grid h-screen w-screen place-items-center  ",
        )}
        onClick={() => setIsShowPortal((pre) => !pre)}
      >
        <div
          className=" border-gray-200   shadow "
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {title}
            <Cross />
          </div>
          {children}
        </div>
      </div>,
      document.getElementById("popOver") as HTMLElement,
    );
  };

  return { isShowPortal, setIsShowPortal, renter };
};
