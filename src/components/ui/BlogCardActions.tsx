import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import threeDots from "@/assets/icons/3dots.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";
import { Link } from "react-router-dom";

interface Props extends React.ComponentProps<"div"> {
  blogId: string;
}

export const BlogCardActions = (props: Props) => {
  const [showPopUp, setShowPopUp] = useState(false);
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
              to={`/edit/${props.blogId}`}
              className="action-menu-item hover:text-lwsGreen"
            >
              <img src={editIcon} alt="Edit" />
              Edit
            </Link>
            <button className="action-menu-item hover:text-red-500">
              <img src={deleteIcon} alt="Delete" />
              Delete
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
