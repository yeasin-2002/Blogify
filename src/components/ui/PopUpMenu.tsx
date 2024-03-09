import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const PopUpMenu = ({ ...rest }: Props) => {
  return (
    <div {...rest} className="relative">
      <div className="absolute right-0 top-0">
        <button>
          <img src="./assets/icons/3dots.svg" alt="3dots of Action" />
        </button>

        <div className="action-modal-container">
          <button className="action-menu-item hover:text-lwsGreen">
            <img src="./assets/icons/edit.svg" alt="Edit" />
            Edit
          </button>
          <button className="action-menu-item hover:text-red-500">
            <img src="./assets/icons/delete.svg" alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
