import { cn } from '@/utils';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {
  img: string;
  alt: string;
  size?: string;
}

export const Avatar = ({ img, alt, className }: Props) => {
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
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {alt[0]}
          </span>
        </div>
      )}
    </div>
  );
};
