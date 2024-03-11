import { motion } from "framer-motion";
import { UserIcon } from "../icons";
import { TextSkeleton } from "./Text.skeleton";

export const ProfileInfoSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mt-4 flex flex-col items-center gap-y-5">
        <UserIcon className="size-28" />
        <TextSkeleton />
      </div>
    </motion.div>
  );
};
