import commentIcon from "@/assets/icons/comment.svg";

import { LikeBlog, LinkFill, ToggleBlogToFavorite } from "@/components";
import { useAuth } from "@/hooks";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
  totalComments: number | undefined;
  totalLikes: number | undefined;
  isFavourite?: boolean;
  blogId?: string;
  allLikes: { id: string }[];
}

export const BlogFloatingActions = ({
  totalComments,
  totalLikes,
  blogId = "",
  allLikes,
  ...rest
}: Props) => {
  const auth = useAuth();
  const isLiked = allLikes.some((like) => like.id === auth?.authUser?.id);

  return (
    <div className="floating-action" {...rest}>
      <ul className="floating-action-menus">
        <li>
          <LikeBlog blogId={blogId!} invalidateKey={["singleBlog", blogId]}>
            {/* {isLiked ? (
              <LinkFill
                className={cn({
                  "text-red-500": isLiked,
                  "text-gray-500": !isLiked,
                })}
              />
            ) : (
              <Like />
            )} */}
            <LinkFill
              className={cn({
                "text-red-500": isLiked,
                "text-gray-500": !isLiked,
              })}
            />
            <span>{totalLikes}</span>
          </LikeBlog>
        </li>

        <li>
          <ToggleBlogToFavorite id={blogId!} />
        </li>

        <li>
          <a href="#blog-comments" className="flex items-center gap-x-1">
            <img src={commentIcon} alt="Comments" />
            <span>{totalComments}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
