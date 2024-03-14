import { motion } from "framer-motion";
import { BlogsSkeleton } from "./Blogs.skeleton";

export const RenderBlogSkeleton = ({ initialCount }) => {
  const array = Array.from({ length: initialCount || 5 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {array.map(() => (
        <BlogsSkeleton key={crypto.randomUUID()} />
      ))}
    </motion.div>
  );
};
