export const TextSkeleton = ({ ...rest }) => {
  return (
    <div
      role="status"
      className="max-w-lg animate-pulse space-y-2.5 overflow-hidden "
      {...rest}
    >
      <div className="flex w-full flex-wrap items-center gap-y-1 sm:flex-nowrap">
        <div className="h-2.5 w-28 min-w-64 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-2.5 min-w-52 rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[480px] flex-wrap items-center gap-y-1 sm:flex-nowrap">
        <div className="h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[400px] flex-wrap items-center gap-y-1 sm:flex-nowrap">
        <div className="h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[480px] flex-wrap items-center gap-y-1 sm:flex-nowrap">
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>
      <div className="flex w-full max-w-[440px] flex-wrap items-center gap-y-1 sm:flex-nowrap">
        <div className="ms-2 h-2.5 w-32 rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="flex w-full max-w-[360px] flex-wrap items-center gap-y-1 sm:flex-nowrap">
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
        <div className="ms-2 h-2.5 w-80 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="ms-2 h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-600"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
