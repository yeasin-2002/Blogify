import React from "react";

import threeDots from "@/assets/icons/3dots.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import editIcon from "@/assets/icons/edit.svg";

interface Props extends React.ComponentProps<"div"> {}

export const BlogCardActions = ({ ...rest }: Props) => {
  return (
    <div className="absolute right-0 top-0" {...rest}>
      <button>
        <img src={threeDots} alt="3dots of Action" />
      </button>

      {/* Action Menus Popup */}
      <div className="action-modal-container">
        <button className="action-menu-item hover:text-lwsGreen">
          <img src={editIcon} alt="Edit" />
          Edit
        </button>
        <button className="action-menu-item hover:text-red-500">
          <img src={deleteIcon} alt="Delete" />
          Delete
        </button>
      </div>
    </div>
  );
};
