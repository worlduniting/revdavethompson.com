// ThemeSwitcher Component
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="block">
      <button
        className="w-7 h-7"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {resolvedTheme === "dark" ? (
          <SunIcon
            className="dark:hover:text-slate-300 w-7 h-7"
            title="Switch to Light Mode"
          />
        ) : (
          <MoonIcon
            className="hover:text-slate-300 text-slate-400 w-6 h-6"
            title="Switch to Dark Mode"
          />
        )}
      </button>
    </div>
  );
}
