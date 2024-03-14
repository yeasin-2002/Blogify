import blogIcon from "@/assets/others/blogIcon.svg";
import { BlogCard } from "@/components";
import { useAuth } from "@/hooks";
import { useParams } from "react-router-dom";

export const UsersBlog = ({ usersBlog, userName }) => {
  const auth = useAuth();
  const param = useParams();
  const isAuthUser = param.id === auth.authUser?.id;
  const namingConvention = isAuthUser ? "Your" : `${userName}'s`;

  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">
        {usersBlog?.length !== 0 && namingConvention + " Blogs"}
      </h4>
      <div className="my-6 space-y-4">
        {usersBlog?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {usersBlog?.length === 0 && (
        <div>
          <img
            src={blogIcon}
            alt="writers icon"
            className="mx-auto my-3 h-20 w-20"
          />
          <h4 className="text-center">
            {namingConvention} have not written any blog yet.
            {isAuthUser && (
              <a href="/blog/new" className="text-blue-500">
                Write a new blog
              </a>
            )}
          </h4>
        </div>
      )}
    </>
  );
};
