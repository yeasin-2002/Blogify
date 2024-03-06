import { Like } from "@/components";
import { useAuth } from "@/hooks";
import { Blog } from "@/types";
import { cn } from "@/utils";
import React from "react";
import { Link } from "react-router-dom";
interface Props extends React.ComponentProps<"li"> {
  data: Blog;
}

export const PopularBlogItems = ({ data, ...rest }: Props) => {
  const authorName = "  " + data.author.firstName + " " + data.author.lastName;
  const { authUser } = useAuth();
  const idYouLiked =
    authUser?.id && data.likes.find((like) => like.id === authUser.id);

  return (
    <li {...rest}>
      <h3 className="cursor-pointer font-medium text-slate-400 transition-all hover:text-slate-300">
        {data.title}
      </h3>
      <div className="flex items-center gap-x-1 text-sm text-slate-600">
        by
        <Link to={`/profile/${data.author.id}`}> {authorName} </Link>
        <span className="flex cursor-pointer items-center gap-x-1">
          . {data?.likes?.length || 0}{" "}
          <Like
            className={cn({
              "fill-blue-500   ": idYouLiked,
            })}
          />
        </span>
      </div>
    </li>
  );
};
