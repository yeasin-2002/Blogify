import { BlogsSkeleton } from "./Blogs.skeleton";

const array = Array.from({ length: 3 });

export const SearchSkeleton = (props) => {
  return (
    <div {...props} className=" w-full space-y-2  ">
      {array.map(() => (
        <BlogsSkeleton key={crypto.randomUUID()} className=" w-full" />
      ))}
    </div>
  );
};
