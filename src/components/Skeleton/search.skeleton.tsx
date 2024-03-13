import { BlogsSkeleton } from "./Blogs.skeleton";

interface Props extends React.ComponentProps<"div"> {}
const array = Array.from({ length: 3 });

export const SearchSkeleton = (props: Props) => {
  return (
    <div {...props} className=" w-full space-y-2  ">
      {array.map(() => (
        <BlogsSkeleton key={crypto.randomUUID()} className=" w-full" />
      ))}
    </div>
  );
};
