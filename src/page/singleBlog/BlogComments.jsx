import { CommentItems } from "./CommentItems";
import { CreateComment } from "./CreateComment";
import { NoComments } from "./NoComments";

export const BlogComments = ({ comments, ...rest }) => {
  return (
    <section id="blog-comments" {...rest}>
      <div className="container mx-auto w-full md:w-10/12">
        <CreateComment comments={comments} />
        {comments?.length > 0 ? (
          comments?.map((cm) => <CommentItems comment={cm} key={cm.id} />)
        ) : (
          <NoComments />
        )}
      </div>
    </section>
  );
};
