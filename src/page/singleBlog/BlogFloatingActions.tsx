import commentIcon from "@/assets/icons/comment.svg";

import { Like, LikeBlog, LinkFill, ToggleBlogToFavorite } from "@/components";
import { useAuth } from "@/hooks";
import { HeartIcon } from "lucide-react";

interface Props extends React.ComponentProps<"div"> {
  totalComments: number | undefined;
  totalLikes: number | undefined;
  isFavourite?: boolean;
  blogId?: string;
  allLikes: { id: string }[];
  executeScroll: () => any;
}

export const BlogFloatingActions = ({
  totalComments,
  totalLikes,
  blogId = "",
  allLikes,
  executeScroll,
  ...rest
}: Props) => {
  const auth = useAuth();

  const isLiked = allLikes.some((like) => like.id === auth?.authUser?.id);

  return (
    <div className="floating-action" {...rest}>
      <ul className="floating-action-menus">
        <li>
          <LikeBlog blogId={blogId!} invalidateKey={["singleBlog", blogId]}>
            {isLiked ? <LinkFill /> : <Like />}
            <span>{totalLikes}</span>
          </LikeBlog>
        </li>

        <li>
          <ToggleBlogToFavorite>
            <HeartIcon />
          </ToggleBlogToFavorite>
        </li>

        <li onClick={() => executeScroll()}>
          <img src={commentIcon} alt="Comments" />
          <span>{totalComments}</span>
        </li>
      </ul>
    </div>
  );
};
