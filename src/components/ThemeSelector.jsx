import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="theme-selector pointer">
      <i
        className={`ms-2 bi ${
          theme === "dark" ? "bi-moon-stars text-white" : "bi-moon-stars-fill"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></i>
    </div>
  );
}
