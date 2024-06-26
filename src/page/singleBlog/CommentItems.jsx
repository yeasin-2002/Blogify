import { Avatar } from "@/components";
import { useAuth } from "@/hooks";
import { CommentActions } from "./CommentActions";

export const CommentItems = ({ comment, ...rest }) => {
  const auth = useAuth();
  const isOwner = auth?.authUser?.id === comment.author.id;
  return (
    <div className="my-8 flex items-start space-x-4" {...rest}>
      <Avatar
        img={comment.author.avatar}
        name={comment.author.firstName}
        className="avater-img bg-orange-600 text-white"
      />
      <div className="w-full">
        <div>
          <h5 className="text-slate -500 font-bold">
            {comment.author.firstName} {comment.author.lastName}
          </h5>
          <p className="text-slate-800 dark:text-slate-300">
            {comment.content}
          </p>
        </div>
        {isOwner && <CommentActions commentId={comment.id} />}
      </div>
    </div>
  );
};
