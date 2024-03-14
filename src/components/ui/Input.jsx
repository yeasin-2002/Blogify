import { cn } from "@/utils";

export const Input = ({
  register,
  errorMsg,
  labelName,
  className,
  ...rest
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={labelName}
        className={cn("mb-2 block text-slate-900 dark:text-slate-100 ")}
      >
        {labelName}
      </label>
      <input id={labelName} {...rest} {...register} className={cn(className)} />
      {errorMsg && (
        <p className="mt-1 animate-pulse text-sm text-red-500">{errorMsg}</p>
      )}
    </div>
  );
};
