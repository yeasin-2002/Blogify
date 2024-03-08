import { cn } from "@/utils";
import type { ReactNode, ReactPortal } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

export const usePortal = (defaultShow = false) => {
  const [isShowPortal, setIsShowPortal] = useState(defaultShow);

  const renter = (children: ReactNode): ReactPortal | null => {
    if (!isShowPortal) return null;
    return createPortal(
      <div
        className={cn(
          "fixed left-0 top-0 z-50 grid  h-full w-full  place-items-center bg-slate-800/50 backdrop-blur-sm",
        )}
        onClick={() => setIsShowPortal((pre) => !pre)}
      >
        <div
          className=" h-full   w-full  border-gray-200 shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" mx-auto mt-10 w-11/12    rounded-lg border border-slate-600/50 bg-slate-900 p-4 shadow-lg shadow-slate-400/10 ">
            {children}
          </div>
        </div>
      </div>,
      document.getElementById("popOver") as HTMLElement,
    );
  };

  return { isShowPortal, setIsShowPortal, renter };
};
