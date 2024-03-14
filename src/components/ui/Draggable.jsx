import { cn } from "@/utils";
import { useCallback } from "react";

const defaultFileTypes = ["JPG", "PNG", "JPEG"];

export const Draggable = ({
  handleChange,
  name,
  types = defaultFileTypes,
  children,
  className,
  ...rest
}) => {
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        handleChange(file);
      }
    },
    [handleChange],
  );

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      handleChange(file);
    }
  };

  return (
    <label
      onDrop={onDrop}
      onDragOver={onDragOver}
      htmlFor="drag-and-drop-file"
      className={cn("cursor-pointer", className)}
      {...rest}
    >
      {children}
      <input
        id="drag-and-drop-file"
        type="file"
        name={name}
        accept={types.join(",")}
        onChange={onChange}
        className="hidden"
      />
    </label>
  );
};
