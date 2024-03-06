import { baseUrl, cn, formatDateYearFirst } from "@/utils";
import React from "react";
interface Props extends React.ComponentProps<"div"> {
  showActionModal?: boolean;
  blog: Blog;
}

// assets and Icons
import { useAuth } from "@/hooks";
import { Blog } from "@/types";
import { Link } from "react-router-dom";
import { Like } from "../icons";
import { BlogCardActions } from "./BlogCardActions";

export const BlogCard = ({ blog, ...rest }: Props) => {
  if (!blog) return null;
  const { authUser } = useAuth();

  const thumbnail = `${baseUrl}/uploads/blog/${blog?.thumbnail}`;
  const authName = blog.author.firstName + " " + blog.author.lastName;
  const blogCreatedDate = formatDateYearFirst(new Date(blog.createdAt));
  const isYouLiked =
    authUser?.id && blog.likes.find((like) => like.id === authUser.id);

  const isUserIsAuthor = authUser?.id === blog.author.id || false;

  return (
    <div className="blog-card" {...rest}>
      <img className="blog-thumb" src={thumbnail} alt="" />
      <div className="relative mt-2">
        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl text-slate-300 lg:text-2xl">
            <p>{blog.title}</p>
          </h3>
        </Link>
        <p className="mb-6 mt-1 line-clamp-3 text-base text-slate-500">
          {blog?.content}
        </p>

        {/* Meta Informations */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 capitalize">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">S</span>
            </div>

            <div>
              <h5 className="text-sm text-slate-500">
                <a href="./profile.html">{authName}</a>
              </h5>
              <div className="flex items-center text-xs text-slate-700">
                {/* <span>June 28, 2018</span> */}
                <span> {blogCreatedDate}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-1 px-2 py-1 text-sm text-slate-700">
            <span>{blog?.likes?.length}</span>
            <Like
              className={cn("size-5", {
                "fill-blue-600": isYouLiked,
              })}
            />
          </div>
        </div>

        {isUserIsAuthor && <BlogCardActions />}
      </div>
    </div>
  );
};
