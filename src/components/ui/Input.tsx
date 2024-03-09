import { cn } from "@/utils";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
  register: UseFormRegisterReturn;
  errorMsg: string | undefined;
  labelName: string;
}

export const Input = ({
  register,
  errorMsg,
  labelName,
  className,
  ...rest
}: Props) => {
  return (
    <div className="mb-6">
      <label htmlFor={labelName} className={cn("mb-2 block")}>
        {labelName}
      </label>
      <input id={labelName} {...rest} {...register} className={cn(className)} />
      {errorMsg && (
        <p className="mt-1 animate-pulse text-sm text-red-500">{errorMsg}</p>
      )}
    </div>
  );
};
