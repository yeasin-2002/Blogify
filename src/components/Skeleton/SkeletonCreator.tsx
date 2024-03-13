import { cn } from "@/utils";
import { motion } from "framer-motion";

export function SkeletonCreator({ className, ...props }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "animate-pulse rounded-md  bg-gray-300 dark:bg-slate-700",
        className,
      )}
      {...props}
    />
  );
}
