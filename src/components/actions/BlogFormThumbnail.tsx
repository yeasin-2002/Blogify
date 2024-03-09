import { ImageIcon } from "@/components/icons";
import { usePortal } from "@/hooks";
import React from "react";
import { Draggable, DropzoneFile } from "../ui";
interface Props extends React.ComponentProps<"div"> {}

export const BlogFormThumbnail = ({ ...rest }: Props) => {
  const { renter, isShowPortal, setIsShowPortal } = usePortal();
  return (
    <>
      <div
        className="my-4 grid h-[150px] cursor-pointer place-items-center rounded-md bg-slate-600/20"
        {...rest}
        onClick={() => setIsShowPortal(!isShowPortal)}
      >
        <div className="flex  items-center gap-4 transition-all hover:scale-110">
          <ImageIcon />
          <p>Upload Your Image</p>
        </div>
      </div>

      {renter(
        <Draggable>
          {/* <PortalHeading title="Upload Your Image" /> */}
          <DropzoneFile className="h-full w-full" />
        </Draggable>,
      )}
    </>
  );
};
