import { useState } from "react";

import type { Dispatch, SetStateAction } from "react";

interface UseBooleanOutput {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(!!defaultValue);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((x) => !x);

  return { value, setValue, setTrue, setFalse, toggle };
}
