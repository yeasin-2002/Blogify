import editIcon from '@/assets/icons/edit.svg';
import fileIcon from '@/assets/icons/file.svg';
import {
  Draggable,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components';

import React, { useState } from 'react';
const fileTypes = ['JPG', 'PNG', 'JPEG'];

interface Props extends React.ComponentProps<'div'> {}

export const UpdateProfileAvatar = ({ ...rest }: Props) => {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
  };

  console.log(file);
  return (
    <div {...rest}>
      <Popover title="Upload Avatar" className="bg-slate-200 ">
        <PopoverTrigger className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-slate-700 hover:bg-slate-700/80">
          <img src={editIcon} alt="Edit" />
        </PopoverTrigger>
        <PopoverContent>
          <Draggable handleChange={handleChange} name="file" types={fileTypes}>
            <div className="mt-10 grid  place-items-center     gap-y-5 ">
              <img src={fileIcon} alt="File" className=" size-20 " />
              <p className="text-center  text-gray-600">
                Click or Drag your image here
              </p>
              <p className="text-center text-gray-400">
                Supported Types:
                <br />
                {fileTypes.map((type, i) => (
                  <span key={type + i} className="mx-1">
                    {type}
                  </span>
                ))}
              </p>
            </div>
          </Draggable>
        </PopoverContent>
      </Popover>
    </div>
  );
};
