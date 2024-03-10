import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import threeDots from "@/assets/icons/3dots.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import { useAxios } from "@/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface Props extends React.ComponentProps<"div"> {
  blogid: string;
}

export const BlogCardActions = (props: Props) => {
  const api = useAxios();
  const queryClient = useQueryClient();

  const [showPopUp, setShowPopUp] = useState(false);
  const { mutateAsync } = useMutation({
    mutationKey: ["deleteBlog", props?.blogid],
    mutationFn: async () => api.delete(`/blogs/${props?.blogid}`),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleDelete = async () => {
    try {
      const req = await mutateAsync();
      console.log("🚀 ~ handleDelete ~ req:", req);
    } catch (error) {
      toast.error("Failed to delete your blog");
    }
  };
  return (
    <div className="absolute right-0 top-0" {...props}>
      <button onClick={() => setShowPopUp(!showPopUp)}>
        <img src={threeDots} alt="3dots of Action" />
      </button>

      <AnimatePresence>
        {showPopUp && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="action-modal-container"
          >
            <Link
              to={`/edit/${props.blogid}`}
              className="action-menu-item hover:text-lwsGreen"
            >
              <img src={editIcon} alt="Edit" />
              Edit
            </Link>
            <button
              className="action-menu-item hover:text-red-500"
              onClick={handleDelete}
            >
              <img src={deleteIcon} alt="Delete" />
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
