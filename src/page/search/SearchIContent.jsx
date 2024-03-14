import { baseUrl } from "@/utils";
import { Link } from "react-router-dom";
import { NoBlogFoundWhileSearch } from "./NoBlogFoundWhileSearch";
import { searchAndSortBlog } from "./searchAndSortBlog";

export const SearchContent = ({
  data,
  SearchFilter,
  setIsShowPortal,
  ...rest
}) => {
  const filteredData =
    data?.data?.data &&
    searchAndSortBlog({
      sortBy: SearchFilter,
      blog: data?.data?.data,
    });

  return (
    <div
      className="  h-full divide-y-2 divide-slate-500/30 overflow-y-scroll overscroll-contain"
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
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-300">
              {blog.title}
            </h3>
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
