import { Like, LikeBlog, LinkFill } from "@/components";
import { useAuth } from "@/hooks";
import { Blog } from "@/types";
import React from "react";
import { Link } from "react-router-dom";
interface Props extends React.ComponentProps<"li"> {
  data: Blog;
}

export const PopularBlogItems = ({ data, ...rest }: Props) => {
  const authorName = "  " + data.author.firstName + " " + data.author.lastName;
  const auth = useAuth();
  const isYouLiked =
    auth?.authUser?.id &&
    data.likes.find((like) => like.id === auth?.authUser?.id);

  return (
    <li {...rest}>
      <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
        {data.title}
      </h3>
      <div className="flex items-center gap-x-1 text-sm text-slate-600">
        by
        <Link to={`/profile/${data.author.id}`}> {authorName} </Link>
        <LikeBlog
          blogId={data.id}
          invalidateKey={["mostPopularBlogs"]}
          className="flex cursor-pointer items-center gap-x-1"
        >
          . {data?.likes?.length || 0} {isYouLiked ? <LinkFill /> : <Like />}
        </LikeBlog>
      </div>
    </li>
  );
};
