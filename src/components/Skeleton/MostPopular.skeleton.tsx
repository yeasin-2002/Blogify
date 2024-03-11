import { BlogsSkeleton } from "./Blogs.skeleton";

interface Props extends React.ComponentProps<"div"> {}
const array = Array.from({ length: 10 });

export const MostPopularSkeleton = (props: Props) => {
  return (
    <div {...props} className="space-y-5 md:col-span-5">
      {array.map((_, index) => (
        <BlogsSkeleton key={index} className="h-10 w-full" />
      ))}
    </div>
  );
};
