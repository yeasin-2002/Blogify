import commentIcon from "@/assets/icons/comment.svg";

import { LikeBlog, LinkFill, ToggleBlogToFavorite } from "@/components";
import { useAuth, usePortal } from "@/hooks";
import { cn } from "@/utils";
import { PreventCommentingIfUnauthenticated } from "./PreventCommentingIfUnauthenticated";

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
  const { renter, setIsShowPortal } = usePortal();

  const isLiked = allLikes.some((like) => like.id === auth?.authUser?.id);
  const isLoggedIn = auth?.authUser && auth.authToken ? true : false;

  return (
    <>
      <div
        className="floating-action"
        {...rest}
        onClick={() => {
          if (!isLoggedIn) {
            setIsShowPortal(true);
          }
        }}
      >
        <ul className="floating-action-menus">
          <li>
            <LikeBlog
              blogId={blogId!}
              invalidateKey={["singleBlog", blogId]}
              isStopQuery={!isLoggedIn}
            >
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
            <ToggleBlogToFavorite id={blogId!} isStopQuery={!isLoggedIn} />
          </li>
          <li>
            <a href="#blog-comments" className="flex items-center gap-x-1">
              <img src={commentIcon} alt="Comments" />
              <span>{totalComments}</span>
            </a>
          </li>
        </ul>
      </div>
      {renter(
        <PreventCommentingIfUnauthenticated
          setIsShowPortal={setIsShowPortal}
        />,
      )}
    </>
  );
};
