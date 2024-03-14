import { ImageIcon } from "@/components/icons";
import { baseUrl } from "@/utils";
import { RotateCcw, UploadCloudIcon } from "lucide-react";

export const BlogFormThumbnail = ({
  imgFile = "",
  handleChange,
  errorMsg,
  Register,
  ...rest
}) => {
  return (
    <div className="pb-5">
      <div
        className="my-4 grid min-h-[150px] cursor-pointer place-items-center overflow-hidden rounded-md bg-slate-600/20"
        {...rest}
        {...Register}
      >
        {imgFile ? (
          <div>
            {typeof imgFile === "string" ? (
              <img
                src={`${baseUrl}/uploads/blog/${imgFile}`}
                alt="thumbnail"
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={URL.createObjectURL(imgFile) || ""}
                alt="thumbnail"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        ) : (
          <div className="flex  items-center gap-4 transition-all hover:scale-110">
            <ImageIcon />
            <p>Upload Your Image</p>
          </div>
        )}
      </div>
      {errorMsg && (
        <p className="my-2 text-center text-sm text-red-500">{errorMsg}</p>
      )}

      <div className="flex flex-col items-center gap-y-2 *:w-full  sm:flex-row sm:gap-x-2 sm:*:w-48">
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
          className="flex items-center justify-center gap-x-3 rounded-lg border border-transparent bg-slate-900 px-8 py-2.5 text-sm text-white transition-colors duration-300 hover:bg-black/80 sm:text-base"
          type="button"
          onClick={() => handleChange("")}
        >
          <RotateCcw />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
