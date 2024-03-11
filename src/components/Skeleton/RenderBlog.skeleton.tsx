import { motion } from "framer-motion";
import React from "react";
import { BlogsSkeleton } from "./Blogs.skeleton";
interface Props extends React.ComponentProps<"div"> {
  initialCount?: number;
}

export const RenderBlogSkeleton = ({ initialCount }: Props) => {
  const array = Array.from({ length: initialCount || 5 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {array.map((i) => (
        <BlogsSkeleton key={i} />
      ))}
    </motion.div>
  );
};
