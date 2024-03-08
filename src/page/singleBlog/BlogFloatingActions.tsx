import commentIcon from "@/assets/icons/comment.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import { Like, LikeBlog, LinkFill } from "@/components";
import { useAuth } from "@/hooks";

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
  blogId,
  allLikes,
  ...rest
}: Props) => {
  const auth = useAuth();
  const isLiked = allLikes.some((like) => like.id === auth?.authUser?.id);

  return (
    <div className="floating-action" {...rest}>
      <ul className="floating-action-menus">
        <li>
          <LikeBlog blogId={blogId!}>
            {isLiked ? <LinkFill /> : <Like />}
            <span>{totalLikes}</span>
          </LikeBlog>
        </li>

        <li>
          <img src={HeartIcon} alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src={commentIcon} alt="Comments" />
            <span>{totalComments}</span>
          </li>
        </a>
      </ul>
    </div>
  );
};
