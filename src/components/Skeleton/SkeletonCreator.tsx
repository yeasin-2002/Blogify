import { cn } from "@/utils";

export function SkeletonCreator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-700", className)}
      {...props}
    />
  );
}
