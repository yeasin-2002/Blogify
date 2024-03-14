import { cn } from "@/utils";

export const BlogsSkeleton = ({ className, ...rest }) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full  animate-pulse overflow-hidden rounded-lg border border-gray-500/40 bg-slate-200 shadow-lg dark:bg-gray-800",
        className,
      )}
      {...rest}
    >
      <div className="w-1/3 bg-gray-400 dark:bg-gray-600"></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="h-2 w-40 rounded-lg bg-gray-400 dark:bg-gray-700"></h1>

        <p className="mt-4 h-2 w-48 rounded-lg bg-gray-400 dark:bg-gray-700"></p>

        <div className="item-center mt-4 flex gap-x-2">
          <p className="h-2 w-5 rounded-lg bg-gray-400 dark:bg-gray-700"></p>
          <p className="h-2 w-5 rounded-lg bg-gray-400 dark:bg-gray-700"></p>
          <p className="h-2 w-5 rounded-lg bg-gray-400 dark:bg-gray-700"></p>
          <p className="h-2 w-5 rounded-lg bg-gray-400 dark:bg-gray-700"></p>
          <p className="h-2 w-5 rounded-lg bg-gray-400 dark:bg-gray-700"></p>
        </div>

        <div className="item-center mt-6 flex justify-between">
          <h1 className="h-2 w-10 rounded-lg bg-gray-400 dark:bg-gray-700"></h1>

          <div className="h-4 w-28 rounded-lg bg-gray-400 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};
