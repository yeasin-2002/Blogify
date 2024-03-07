import { Avatar } from "@/components";
import { Blog } from "@/types";
import { formatDateYearFirst, getBlogThumbnail } from "@/utils";
import React from "react";
interface Props extends React.ComponentProps<"div"> {
  blog: Blog | undefined;
}

export const BlogContent = ({ blog, ...rest }: Props) => {
  const thumbnail = getBlogThumbnail(blog?.thumbnail);
  const publishDate = formatDateYearFirst(new Date(blog?.createdAt || ""));

  return (
    <section {...rest}>
      <div className="container py-8 text-center ">
        <h1 className="text-3xl font-bold md:text-5xl">{blog?.title}</h1>
        <div className="my-4 flex items-center justify-center gap-4">
          <div className="flex items-center space-x-2 capitalize">
            <Avatar
              img={blog?.author?.avatar}
              name={blog?.author?.firstName}
              className="avater-img bg-indigo-600 text-white"
            />
            <h5 className="text-sm text-slate-500">
              {blog?.author?.firstName} {blog?.author?.lastName}
            </h5>
          </div>
          <span className="dot text-sm text-slate-700"> {publishDate} </span>
        </div>
        <img
          className="mx-auto h-80 w-full object-cover md:h-96 md:w-8/12"
          src={thumbnail}
          alt=""
        />

        {blog?.tags && (
          <ul className="tags">
            {blog?.tags
              .split(",")
              .map((tag, index) => <li key={index}>{tag}</li>)}
          </ul>
        )}

        <article
          className="prose mx-auto mt-5 w-full py-2 !text-left text-base leading-8 text-slate-300 lg:prose-xl md:w-10/12 md:text-lg"
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        />
      </div>
    </section>
  );
};
