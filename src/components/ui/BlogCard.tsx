import { baseUrl, formatDateYearFirst } from "@/utils";
import React from "react";
interface Props extends React.ComponentProps<"div"> {
  showActionModal?: boolean;
  blog: Blog;
}

// assets and Icons
import { useAuth } from "@/hooks";
import { Blog } from "@/types";
import { Link } from "react-router-dom";
import { LikeBlog } from "../actions";
import { Like, LinkFill } from "../icons";
import { Avatar } from "./Avatar";
import { BlogCardActions } from "./BlogCardActions";

export const BlogCard = ({ blog, ...rest }: Props) => {
  if (!blog) return null;
  const auth = useAuth();

  const thumbnail = `${baseUrl}/uploads/blog/${blog?.thumbnail}`;
  const authName = blog.author.firstName + " " + blog.author.lastName;
  const blogCreatedDate = formatDateYearFirst(new Date(blog.createdAt));
  const isYouLiked =
    auth?.authUser?.id &&
    blog.likes.find((like) => like.id === auth?.authUser?.id);

  const isUserIsAuthor = auth?.authUser?.id === blog.author.id || false;

  return (
    <div className="blog-card" {...rest}>
      <img className="blog-thumb" src={thumbnail} alt="" />
      <div className="relative mt-2">
        <Link to={`/blog/${blog?.id}`}>
          <h3 className="text-xl text-slate-300 lg:text-2xl">
            <p>{blog.title}</p>
          </h3>
        </Link>

        <div
          className="mb-6 mt-1 line-clamp-3 text-base text-slate-500"
          dangerouslySetInnerHTML={{ __html: blog.content }}/>


        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 capitalize">
            <Link to={`/profile/${blog?.author?.id}`}>
              <Avatar
                img={blog?.author?.avatar}
                name={blog?.author?.firstName}
              />
            </Link>

            <div>
              <h5 className="text-sm text-slate-500">
                <Link to={`/profile/${blog?.author?.id}`}>{authName}</Link>
              </h5>
              <div className="flex items-center text-xs text-slate-700">
                <span> {blogCreatedDate}</span>
              </div>
            </div>
          </div>

          <LikeBlog
            blogId={blog?.id}
            invalidateKey={["blog"]}
            className="flex items-center gap-x-1 px-2 py-1 text-sm text-slate-700"
          >
            <span>{blog?.likes?.length}</span>
            {isYouLiked ? <LinkFill /> : <Like />}
          </LikeBlog>
        </div>

        {isUserIsAuthor && <BlogCardActions blogid={blog?.id} />}
      </div>
    </div>
  );
};
