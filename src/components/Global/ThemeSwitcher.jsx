import { MoonStar, SunIcon } from "@/components/icons/theme";
import { useTheme } from "@/hooks";
import { AnimatePresence } from "framer-motion";

export const ThemeSwitcher = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      {...props}
      className="cursor-pointer rounded-lg bg-slate-200 p-2 dark:bg-gray-800 "
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <AnimatePresence>
        {theme === "light" ? <SunIcon /> : <MoonStar />}
      </AnimatePresence>
    </button>
  );
};
