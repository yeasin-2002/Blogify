import { BlogsSkeleton } from "./Blogs.skeleton";

const array = Array.from({ length: 5 });

export const YourFavoriteSkelton = (props) => {
  return (
    <div {...props} className="space-y-5 md:col-span-5">
      {array.map(() => (
        <BlogsSkeleton key={crypto.randomUUID()} className="h-10 w-full" />
      ))}
    </div>
  );
};
