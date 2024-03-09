import { ImageIcon } from "@/components/icons";
import { RotateCcw, UploadCloudIcon } from "lucide-react";
import React from "react";

interface Props extends React.ComponentProps<"div"> {
  imgFile: File | null;
  handleChange: (file: File | null) => void;
}

export const BlogFormThumbnail = ({
  imgFile,
  handleChange,
  ...rest
}: Props) => {
  return (
    <div className="pb-5">
      <div
        className="my-4 grid min-h-[150px] cursor-pointer place-items-center overflow-hidden rounded-md bg-slate-600/20"
        {...rest}
      >
        {imgFile ? (
          <img
            src={URL.createObjectURL(imgFile)}
            alt="thumbnail"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex  items-center gap-4 transition-all hover:scale-110">
            <ImageIcon />
            <p>Upload Your Image</p>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <label
          htmlFor="thumbnail"
          className="flex items-center justify-center gap-x-3 rounded-lg border border-transparent bg-[#1877F2] px-8 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-[#1877F2]/80 sm:text-base"
        >
          <UploadCloudIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          <span>Upload File</span>
        </label>

        <input
          type="file"
          id="thumbnail"
          className="hidden"
          onChange={(e) => {
            if (e?.currentTarget?.files)
              handleChange(e?.currentTarget?.files[0]);
          }}
        />

        <button
          className="flex items-center justify-center gap-x-3 rounded-lg border border-transparent bg-black px-8 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-black/80 sm:text-base"
          type="button"
          onClick={() => handleChange(null)}
        >
          <RotateCcw />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
