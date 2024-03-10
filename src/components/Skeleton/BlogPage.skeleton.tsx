import { SkeletonCreator as Skeleton } from "./SkeletonCreator";

interface Props extends React.ComponentProps<"div"> {}

export const BlogPageSkeleton = (props: Props) => {
  return (
    <div {...props} className="space-y-4 px-40 py-5">
      <Skeleton className="h-52 w-full" />

      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />

      <Skeleton className="h-36 w-full" />

      <Skeleton className="h-10 w-20" />
    </div>
  );
};
