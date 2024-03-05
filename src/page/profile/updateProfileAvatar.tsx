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

interface Props extends React.ComponentProps<'div'> {
  avatarLegacy: string | undefined;
  userName?: string;
}

export const UpdateProfileAvatar = ({ avatarLegacy, ...rest }: Props) => {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
  };

  console.log(file);
  return (
    <div {...rest}>
      <Popover title="Upload Avatar" className="bg-slate-200 ">
        <PopoverTrigger>
          <button className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-slate-700 hover:bg-slate-700/80">
            <img src={editIcon} alt="Edit" />
          </button>
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
                {fileTypes.map((type) => (
                  <span className="mx-1">{type}</span>
                ))}
              </p>
            </div>
          </Draggable>
        </PopoverContent>
      </Popover>
    </div>
  );
};
