import { cn } from "@/utils";
import { UploadIcon } from "lucide-react";
interface DropzoneFileProps extends React.ComponentPropsWithoutRef<"input"> {}

export const DropzoneFile = (props: DropzoneFileProps) => (
  <div
    className={cn(
      "dark:hover:bg-bray-800 flex h-full  w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
      props?.className,
    )}
  >
    <div className="flex flex-col items-center justify-center pb-6 pt-5">
      <UploadIcon />
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </div>
    {/* <input
      id="dropzone-file"
      type="file"
      {...props}
      className={cn("hidden", props.className)}
    /> */}
  </div>
);
