import { BlogsSkeleton } from "./Blogs.skeleton";

interface Props extends React.ComponentProps<"div"> {}
const array = Array.from({ length: 3 });

export const SearchSkeleton = (props: Props) => {
  return (
    <div {...props} className=" w-full space-y-2  ">
      {array.map((_, index) => (
        <BlogsSkeleton key={index} className=" w-full" />
      ))}
    </div>
  );
};
