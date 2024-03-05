import { baseUrl, cn } from '@/utils';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {
  img?: string;
  size?: string;
  name?: string;
}

export const Avatar = ({ img, name = '', className }: Props) => {
  const [isError, setIsError] = React.useState(false);

  const imgUrl = `${baseUrl}/uploads/avatar/${img}`;

  return (
    <div className={`flex items-center justify-center `}>
      {img && !isError ? (
        <img
          className={cn(' rounded-full   object-cover', className)}
          src={imgUrl}
          alt=" avatar"
          onError={() => setIsError(true)}
        />
      ) : (
        <div
          className={cn(
            ' relative inline-flex  items-center justify-center overflow-hidden rounded-full bg-orange-600 ',
            className,
          )}
        >
          <span className="text-2xl font-bold   capitalize text-gray-600 dark:text-gray-300 ">
            {name[0]}
          </span>
        </div>
      )}
    </div>
  );
};
