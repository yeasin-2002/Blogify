import { EyeClose, EyeOpen } from "@/components/icons";
import { cn } from "@/utils";
import { useState } from "react";

export const PasswordInput = ({
  register,
  errorMsg,
  labelName,
  className,
  ...rest
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const toggleShowPassword = () => setIsShowPass((prev) => !prev);
  return (
    <div className="mb-6">
      <label htmlFor={labelName} className={cn("mb-2 block")}>
        {labelName}
      </label>

      <div className="relative">
        <input
          id={labelName}
          {...rest}
          {...register}
          className={cn(className)}
          type={isShowPass ? "text" : "password"}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 transform text-sm text-gray-500"
          onClick={toggleShowPassword}
        >
          {isShowPass ? <EyeOpen /> : <EyeClose />}
        </button>
      </div>

      {errorMsg && (
        <p className="mt-1 animate-pulse text-sm text-red-500">{errorMsg}</p>
      )}
    </div>
  );
};
