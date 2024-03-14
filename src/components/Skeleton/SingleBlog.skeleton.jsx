import { SkeletonCreator as Skeleton } from "./SkeletonCreator";

export const SingleBlogSkeleton = ({ ...rest }) => {
  return (
    <div {...rest} className="px-20 py-5">
      <Skeleton className="h-52 w-full" />

      <Skeleton className="mt-4 h-10 w-full" />
      <Skeleton className="mt-4 h-10 w-full" />
      <Skeleton className="mt-4 h-10 w-full" />

      <Skeleton className="mt-10 h-36 w-full" />
    </div>
  );
};
