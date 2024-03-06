import { Blog } from "@/types";
import { baseUrl } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";
interface Props extends React.ComponentProps<"div"> {
  data: Blog[];
}

export const SearchContent = ({ data, ...rest }: Props) => {
  return (
    <div
      className="my-4 max-h-[440px] divide-y-2 divide-slate-500/30 overflow-y-scroll overscroll-contain"
      {...rest}
    >
      {data?.map((blog) => (
        <Link to={`/blog/${blog.id}`} className="flex gap-6 py-2" key={blog.id}>
          <img
            className="h-28 object-contain"
            src={`${baseUrl}/uploads/blog/${blog.thumbnail}`}
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-300">{blog.title}</h3>
            {/* Meta Informations */}
            <p className="mb-6 mt-1 text-sm text-slate-500">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim. Venenatis
              eget adipiscing luctus lorem.
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
