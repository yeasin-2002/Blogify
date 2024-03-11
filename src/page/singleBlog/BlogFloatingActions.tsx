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
  // const commentSection = document.getElementById("#comments");

  // const intoTheCommentSections = (
  //   e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  // ) => {
  //   e.preventDefault();
  //   return commentRef?.current?.scrollIntoView({ behavior: "smooth" });
  //   // commentSection?.scrollIntoView({ behavior: "smooth" });
  // };

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
          <ToggleBlogToFavorite id={blogId!}>
            <HeartIcon />
          </ToggleBlogToFavorite>
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
