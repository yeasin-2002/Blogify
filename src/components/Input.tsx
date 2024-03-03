import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends React.ComponentProps<'input'> {
  register: UseFormRegisterReturn;
  errorMsg: string | undefined;
  labelName: string;
}

export const Input = ({ register, errorMsg, labelName, ...rest }: Props) => {
  return (
    <div className="mb-6">
      <label htmlFor={labelName} className="mb-2 block">
        {labelName}
      </label>
      <input
        id={labelName}
        {...rest}
        {...register}
        className="w-full rounded-md border border-white/20 bg-[#030317] p-3 focus:border-indigo-500 focus:outline-none"
      />
      {errorMsg && (
        <p className="mt-1 animate-pulse text-sm text-red-500">{errorMsg}</p>
      )}
    </div>
  );
};
