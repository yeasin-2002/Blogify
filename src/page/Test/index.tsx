import { usePortal } from "@/hooks";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const WithChild = (props: DivPropsWithChild) => {
  console.log(typeof props.className);
  console.log(Array.isArray(props.children));
  return <div {...props}>{props.children}</div>;
};

export const TestRoute = ({ ...rest }: Props) => {
  const { renter, isShowPortal, setIsShowPortal } = usePortal();

  return (
    <div {...rest} className="h-screen p-10">
      <button
        className="alternative-orange px-4 py-2"
        onClick={() => setIsShowPortal(!isShowPortal)}
      >
        Click To Open
      </button>

      {renter(
        <div>
          <a
            href="#"
            className="block  max-w-sm rounded-lg border border-gray-200   shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>,
      )}

      <WithChild>
        <button className="alternative-orange px-4 py-2">Click Me</button>
        <button className="alternative-orange px-4 py-2">Click Me</button>
      </WithChild>
    </div>
  );
};
