import { cn } from '@/utils';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {
  img?: string;
  size?: string;
  firstName?: string;

}

export const Avatar = ({
  img,
  firstName = '',
  className,
}: Props) => {
  const [isError, setIsError] = React.useState(false);

  return (
    <div className={`flex items-center justify-center `}>
      {img && !isError ? (
        <img
          className={cn(' rounded-full   object-cover', className)}
          src={img}
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
            {firstName[0] }
          </span>
        </div>
      )}
    </div>
  );
};