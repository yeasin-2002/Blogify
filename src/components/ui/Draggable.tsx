import React, { ReactNode, useCallback } from 'react';

interface FileUploaderProps {
  handleChange: (file: File) => void;
  name: string;
  types: string[];
  children?: ReactNode;
}

export const Draggable: React.FC<FileUploaderProps> = ({
  handleChange,
  name,
  types,
  children,
}) => {
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLLabelElement>) => {
      event.preventDefault();

      const files = event.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        handleChange(file);
      }
    },
    [handleChange],
  );

  const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      className=" cursor-pointer"
    >
      {children}
      <input
        id="drag-and-drop-file"
        type="file"
        name={name}
        accept={types.join(',')}
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </label>
  );
};