import { BlogsSkeleton } from "./Blogs.skeleton";

const array = Array.from({ length: 10 });

export const MainBlogSkeleton = (props) => {
  return (
    <div {...props} className="space-y-5 md:col-span-5">
      {array.map(() => (
        <BlogsSkeleton key={crypto.randomUUID()} className="w-full" />
      ))}
    </div>
  );
};
