import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import threeDots from "@/assets/icons/3dots.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";

interface Props extends React.ComponentProps<"div"> {}

export const BlogCardActions = ({ ...rest }: Props) => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="absolute right-0 top-0" {...rest}>
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
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={editIcon} alt="Edit" />
              Edit
            </button>
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
