/* eslint-disable react-hooks/rules-of-hooks */
import { baseUrl, formatTimeWithTimeZone, htmlToString } from "@/utils";
import { motion } from "framer-motion";

import { useAuth } from "@/hooks";
import { Link } from "react-router-dom";
import { LikeBlog } from "../actions";
import { Like, LinkFill } from "../icons";
import { Avatar } from "./Avatar";
import { BlogCardActions } from "./BlogCardActions";

export const BlogCard = ({ blog, ...rest }) => {
  if (!blog) return null;
  const auth = useAuth();

  const thumbnail = `${baseUrl}/uploads/blog/${blog?.thumbnail}`;
  const authName = blog.author.firstName + " " + blog.author.lastName;
  const blogCreatedDate = formatTimeWithTimeZone(new Date(blog.createdAt));
  const isYouLiked =
    auth?.authUser?.id &&
    blog.likes.find((like) => like.id === auth?.authUser?.id);

  const isUserIsAuthor = auth?.authUser?.id === blog.author.id || false;
  const contentString = htmlToString(blog?.content);

  return (
    <motion.div
      className="blog-card"
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link to={`/blog/${blog?.id}`}>
        {blog?.thumbnail && blog?.thumbnail !== "undefined" && (
          <img
            className="blog-thumb border border-slate-800/80"
            src={thumbnail}
            alt="thumbnail"
          />
        )}
      </Link>

      <div className="relative mt-2">
        <Link to={`/blog/${blog?.id}`}>
          <h3 className="font-europa-bold text-xl text-slate-800 dark:text-slate-100 lg:text-2xl">
            {blog.title}
          </h3>

          <div
            className="mb-6 mt-1 line-clamp-3 font-europa-regular text-base text-slate-700
           dark:text-slate-300
          "
          >
            {contentString}
          </div>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 capitalize">
            <Link to={`/profile/${blog?.author?.id}`}>
              <Avatar
                className="size-8"
                img={blog?.author?.avatar}
                name={blog?.author?.firstName}
              />
            </Link>

            <div>
              <Link
                className="font-europa-bold text-sm text-slate-800 dark:text-slate-300"
                to={`/profile/${blog?.author?.id}`}
              >
                {authName}
              </Link>

              <div className="flex items-center font-europa-regular  text-xs text-slate-700  dark:text-slate-400">
                {blogCreatedDate}
              </div>
            </div>
          </div>

          <LikeBlog
            blogId={blog?.id}
            invalidateKey={["blog"]}
            className="flex items-center gap-x-1 px-2 py-1 text-sm text-slate-700"
          >
            <span className="font-europa-bold">{blog?.likes?.length}</span>
            {isYouLiked ? <LinkFill /> : <Like />}
          </LikeBlog>
        </div>

        {isUserIsAuthor && <BlogCardActions blogid={blog?.id} />}
      </div>
    </motion.div>
  );
};
