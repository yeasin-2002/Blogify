import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import threeDots from "@/assets/icons/3dots.svg";
import editIcon from "@/assets/icons/edit.svg";
import { Link } from "react-router-dom";
import { DeleteBlog } from "../actions";

export const BlogCardActions = (props) => {
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
              to={`/edit/${props.blogid}`}
              className="action-menu-item hover:text-lwsGreen"
            >
              <img src={editIcon} alt="Edit" />
              Edit
            </Link>
            <DeleteBlog
              id={props.blogid}
              className="action-menu-item hover:text-red-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
