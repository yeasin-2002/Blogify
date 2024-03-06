import { BlogCard } from "@/components";
import { useAuth } from "@/hooks";
import { Blog } from "@/types";
import { useParams } from "react-router-dom";
interface Props extends React.ComponentProps<"div"> {
  usersBlog: Blog[] | undefined;
  userName: string;
}

export const UsersBlog = ({ usersBlog, userName }: Props) => {
  const { authUser } = useAuth();
  const param = useParams();
  const isAuthUser = param.id === authUser?.id;

  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">
        {isAuthUser ? "Your Blogs" : `${userName}'s Blogs`}
      </h4>
      <div className="my-6 space-y-4">
        {usersBlog?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </>
  );
};
