import { searchResponse } from "@/types";
import { baseUrl } from "@/utils";
import { AxiosResponse } from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { NoBlogFoundWhileSearch } from "./NoBlogFoundWhileSearch";
import { searchAndSortBlog } from "./searchAndSortBlog";
interface Props extends React.ComponentProps<"div"> {
  data: AxiosResponse<searchResponse, any> | undefined;
  error: Error | null;
  SearchFilter: SearchFilter;
  filterBy: SearchFilter;
  setIsShowPortal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContent = ({
  data,
  SearchFilter,
  setIsShowPortal,
  ...rest
}: Props) => {
  const filteredData =
    data?.data?.data &&
    searchAndSortBlog({
      sortBy: SearchFilter,
      blog: data?.data?.data,
    });

  return (
    <div
      className="my-4 max-h-[440px] divide-y-2 divide-slate-500/30 overflow-y-scroll overscroll-contain"
      {...rest}
    >
      {filteredData?.map((blog) => (
        <Link
          to={`/blog/${blog.id}`}
          className="flex gap-6 py-2"
          key={blog.id}
          onClick={() => setIsShowPortal(false)}
        >
          <img
            className="h-28 object-contain"
            src={`${baseUrl}/uploads/blog/${blog.thumbnail}`}
            alt=""
          />
          <div className="mt-2">
            <h3 className="text-xl font-bold text-slate-300">{blog.title}</h3>
            <p className="mb-6 mt-1 line-clamp-3 text-sm text-slate-500">
              {blog.content}
            </p>
          </div>
        </Link>
      ))}

      {!data && <NoBlogFoundWhileSearch />}
    </div>
  );
};
