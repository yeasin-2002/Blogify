import { Cross } from "@/components";
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
        <>
          <div
            //  className=" h-full   w-full  border-gray-200 shadow"
            className=" 
             mx-auto  grid
             h-3/4
             w-11/12 place-items-center    rounded-lg border border-slate-600/50 bg-slate-900 p-4 shadow-lg shadow-slate-400/10 "
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </>
      </div>,
      document.getElementById("popOver") as HTMLElement,
    );
  };

  return { isShowPortal, setIsShowPortal, renter };
};

interface HeadingProps extends React.ComponentProps<"div"> {
  title?: string;
}

export const PortalHeading = ({ title, ...rest }: HeadingProps) => {
  return (
    <div {...rest} className="flex w-full items-center justify-between    ">
      <p className="text-center text-xl font-bold">{title || ""}</p>
      <span className="cursor-pointer rounded-md bg-gray-800 p-2 hover:bg-gray-700">
        <Cross />
      </span>
    </div>
  );
};
