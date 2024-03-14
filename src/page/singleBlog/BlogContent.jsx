import editIcon from "@/assets/icons/edit.svg";
import { Avatar, DeleteBlog } from "@/components";
import { useAuth } from "@/hooks";
import { formatDateYearFirst, getBlogThumbnail } from "@/utils";
import { Link } from "react-router-dom";

export const BlogContent = ({ blog, ...rest }) => {
  const thumbnail = getBlogThumbnail(blog?.thumbnail);
  const publishDate = formatDateYearFirst(new Date(blog?.createdAt || ""));
  const auth = useAuth();
  const isOwner = auth?.authUser?.id === blog?.author?.id;

  return (
    <section {...rest}>
      <div className="container py-4 text-center ">
        <h1 className="text-3xl font-bold md:text-5xl">{blog?.title}</h1>

        <div className="flex items-end justify-center gap-x-32">
          <div className="my-4 flex items-center justify-center gap-4">
            <Link
              to={`/profile/${blog?.author?.id}`}
              className="flex items-center space-x-2 capitalize"
            >
              <Avatar
                img={blog?.author?.avatar}
                name={blog?.author?.firstName}
                className="avater-img bg-indigo-600 text-white"
              />
              <h5 className="text-sm text-slate-500">
                {blog?.author?.firstName} {blog?.author?.lastName}
              </h5>
            </Link>
            <span className="dot text-sm text-slate-700"> {publishDate} </span>
          </div>
          {isOwner && (
            <div className="flex items-center justify-center  gap-x-2 ">
              <Link
                to={`/edit/${blog?.id}`}
                className="action-menu-item alternative-orange py-3"
              >
                <img src={editIcon} alt="Edit" />
                Edit
              </Link>

              <DeleteBlog
                id={blog?.id}
                navigateTo={"/"}
                className="  action-menu-item w-full rounded-md border border-slate-700  "
              />
            </div>
          )}
        </div>

        {blog?.thumbnail && blog?.thumbnail !== "undefined" && (
          <img
            className="mx-auto my-4 h-80 w-full object-cover md:h-96 md:w-8/12"
            src={thumbnail}
            alt="Blog thumbnail"
          />
        )}

        {blog?.tags && (
          <ul className="tags text-white">
            {blog?.tags.split(",").map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        )}

        <article
          // className="prose mx-auto mt-5 w-full py-2 !text-left text-base leading-8  lg:prose-xl md:w-10/12 md:text-lg"
          className="prose  mx-auto mt-7 text-left text-gray-900 xl:prose-xl *:text-gray-900  dark:!text-gray-100 dark:*:text-gray-100 "
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        />
      </div>
    </section>
  );
};
