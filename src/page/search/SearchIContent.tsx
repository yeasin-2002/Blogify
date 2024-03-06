import thumbNail from "@/assets/blogs/taiulwind-cn-thumb.jpg";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const SearchContent = ({ ...rest }: Props) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div
      className="my-4 max-h-[440px] divide-y-2 divide-slate-500/30 overflow-y-scroll overscroll-contain"
      {...rest}
    >
      {array.map((item) => (
        <div className="flex gap-6 py-2" key={item}>
          <img className="h-28 object-contain" src={thumbNail} alt="" />
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-300">
              Style your components with TailwindCSS
            </h3>
            {/* Meta Informations */}
            <p className="mb-6 mt-1 text-sm text-slate-500">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim. Venenatis
              eget adipiscing luctus lorem.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
