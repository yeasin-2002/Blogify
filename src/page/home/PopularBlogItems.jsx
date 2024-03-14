import { Like, LikeBlog, LinkFill } from "@/components";
import { useAuth } from "@/hooks";
import { Link } from "react-router-dom";

export const PopularBlogItems = ({ data, ...rest }) => {
  const authorName = "  " + data.author.firstName + " " + data.author.lastName;
  const auth = useAuth();
  const isYouLiked =
    auth?.authUser?.id &&
    data.likes.find((like) => like.id === auth?.authUser?.id);

  return (
    <li {...rest}>
      <Link
        className="cursor-pointer font-europa-bold font-medium text-slate-800 transition-all hover:text-slate-950 dark:text-slate-400  dark:hover:text-slate-300"
        to={`/blog/${data.id}`}
      >
        {data.title}
      </Link>

      <div className="flex items-center gap-x-1 text-sm  text-slate-600">
        by
        <Link className="font-europa-bold" to={`/profile/${data.author.id}`}>
          {authorName}
        </Link>
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
