import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
    >
      {isDarkMode ? (
        <span className="material-icons text-yellow-300">light_mode</span>
      ) : (
        <span className="material-icons text-neutral-600">dark_mode</span>
      )}
    </Button>
  );
};

export default ThemeToggle;
