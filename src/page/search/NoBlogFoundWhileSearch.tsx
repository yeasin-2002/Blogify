import blogWriting from "@/assets/others/blog.svg";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const NoBlogFoundWhileSearch = ({ ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="flex flex-col items-center justify-center gap-4 py-4"
    >
      <img src={blogWriting} alt="No Blog Found " className="size-2/5" />
      <h3 className="text-2xl font-bold text-slate-300">No Blog Found</h3>
    </div>
  );
};
