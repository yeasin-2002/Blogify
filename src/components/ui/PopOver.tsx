import { createContext, useContext, useState } from 'react';

import { cn } from '@/utils';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { Cross } from '../icons';

interface PopoverContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopoverContext = createContext<PopoverContextProps | undefined>(
  undefined,
);

interface PopOverContainer extends React.ComponentProps<'div'> {
  children: React.ReactNode;
  title?: string;
}

export const Popover = ({ children, title, className }: PopOverContainer) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <PopoverContext.Provider value={{ isOpen, setIsOpen }}>
        {children}

        {isOpen &&
          createPortal(
            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className={`fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-50`}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={cn(
                  'min-h-80 min-w-80 overflow-y-auto rounded-lg bg-white p-4 text-black shadow-lg',
                  className,
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between ">
                  <p>{title}</p>
                  <Cross
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                {children}
              </div>
            </motion.div>,
            document.getElementById('popOver') as HTMLElement,
          )}
      </PopoverContext.Provider>
    </>
  );
};

export const PopoverTrigger = ({ children, ...rest }: ButtonPropWithChild) => {
  const { setIsOpen } = useContext(PopoverContext) as PopoverContextProps;
  return (
    <button
      {...rest}
      aria-haspopup="true"
      aria-expanded="true"
      onClick={() => setIsOpen(true)}
    >
      {children}
    </button>
  );
};

export const PopoverContent = ({ children, ...rest }: DivPropsWithChild) => {
  const { isOpen } = useContext(PopoverContext) as PopoverContextProps;
  return isOpen ? <div {...rest}>{children}</div> : null;
};
