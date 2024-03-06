import commentIcon from "@/assets/icons/comment.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import LikIcon from "@/assets/icons/like.svg";

interface Props extends React.ComponentProps<"div"> {
  totalComments: number | undefined;
  totalLikes: number | undefined;
  isFavourite?: boolean;
}

export const BlogFloatingActions = ({
  totalComments,
  totalLikes,
  ...rest
}: Props) => {
  return (
    <div className="floating-action" {...rest}>
      <ul className="floating-action-menus">
        <li>
          <img src={LikIcon} alt="like" />
          <span>{totalLikes}</span>
        </li>

        <li>
          {/* There is heart-filled.svg in the icons folder */}
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
